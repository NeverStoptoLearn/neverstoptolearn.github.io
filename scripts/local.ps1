param(
    [ValidateSet('dev', 'preview', 'verify', 'test:browser')]
    [string]$Task = 'dev'
)

$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path $PSScriptRoot -Parent
$localToolchain = Join-Path $projectRoot '../../work/toolchain/node_modules'
if (Test-Path (Join-Path $localToolchain 'node/bin/node.exe')) {
    $env:PATH = (Join-Path $localToolchain 'node/bin') + ';' + (Join-Path $localToolchain '.bin') + ';' + $env:PATH
}
Push-Location $projectRoot
try {
    & npm.cmd run $Task
    if ($LASTEXITCODE -ne 0) { throw "npm run $Task failed with exit code $LASTEXITCODE" }
} finally {
    Pop-Location
}
