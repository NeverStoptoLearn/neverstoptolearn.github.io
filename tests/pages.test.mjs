import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { load } from 'cheerio';
import YAML from 'yaml';

const origin = 'https://neverstoptolearn.github.io';
const pages = ['', 'about/', 'research/', 'publications/', 'projects/', 'cv/', 'contact/'];
const routes = pages.flatMap(p => [`/${p}`, `/zh/${p}`]);
const htmlPath = route => path.join('dist', route, 'index.html');

for (const route of routes) {
  test(`${route}: language, SEO, navigation, and every local target`, async () => {
    const $ = load(await readFile(htmlPath(route), 'utf8'));
    assert.equal($('html').attr('lang'), route.startsWith('/zh/') ? 'zh-CN' : 'en');
    assert.equal($('h1').length, 1);
    assert.equal($('main').length, 1);
    assert.ok($('title').text().includes('Zhouchen'));
    assert.ok($('meta[name=description]').attr('content'));
    assert.equal($('link[rel=canonical]').attr('href'), origin + route);
    const switched = route.startsWith('/zh/') ? route.replace('/zh/', '/') : `/zh${route}`;
    assert.equal($('[data-language-switch]').attr('href'), switched);
    assert.equal($('link[hreflang=x-default]').attr('href'), origin + (route.startsWith('/zh/') ? route.replace('/zh/', '/') : route));
    for (const element of $('a[href],link[rel=stylesheet],script[src],img[src]').toArray()) {
      const url = $(element).attr('href') || $(element).attr('src');
      assert.ok(url && url !== '#', `Empty link on ${route}`);
      if (url.startsWith('#')) { assert.equal($(`[id="${url.slice(1)}"]`).length, 1); continue; }
      if (!url.startsWith('/')) continue;
      await access(url.endsWith('/') ? htmlPath(url) : path.join('dist', url));
    }
    for (const key of ['publications/', 'projects/']) assert.ok($(`nav a[href="${route.startsWith('/zh/') ? '/zh/' : '/'}${key}"]`).length);
    assert.equal($('nav a[href$="/research/"], nav a[href$="/about/"], nav a[href$="/cv/"], nav a[href$="/contact/"]').length, 0);
    assert.equal($('a[download]').length, 0, 'No fake CV download before real PDF exists');
  });
}

test('Sitemap covers all 14 localized routes; error page and robots exist', async () => {
  const sitemap = load(await readFile('dist/sitemap.xml', 'utf8'), { xml: true });
  assert.deepEqual(sitemap('loc').map((_, el) => sitemap(el).text()).get().sort(), routes.map(r => origin + r).sort());
  assert.ok((await readFile('dist/404.html', 'utf8')).includes('页面未找到'));
  assert.ok((await readFile('dist/robots.txt', 'utf8')).includes(origin + '/sitemap.xml'));
});

test('Pages workflow deploys only actual default branch after all checks', async () => {
  const workflow = YAML.parse(await readFile('.github/workflows/pages.yml', 'utf8'));
  assert.deepEqual(workflow.on.push.branches, ['**']);
  assert.ok(workflow.jobs['build-pages'].if.includes('github.event.repository.default_branch'));
  assert.ok(workflow.jobs['build-pages'].if.includes("!= 'pull_request'"));
  assert.equal(workflow.jobs['build-pages'].needs, 'validate');
  assert.equal(workflow.jobs.deploy.needs, 'build-pages');
  assert.equal(workflow.jobs.deploy.permissions.pages, 'write');
  assert.equal(workflow.jobs.deploy.permissions['id-token'], 'write');
  assert.ok(workflow.jobs.validate.steps.some(s => s.run === 'npm run test:browser'));
});
