import { readdirSync, writeFileSync, copyFileSync } from 'fs';
import { join } from 'path';

const distClient = 'dist/client';
const assetsDir = join(distClient, 'assets');

const files = readdirSync(assetsDir);
const cssFile = files.find(f => f.endsWith('.css'));
const jsFiles = files.filter(f => f.endsWith('.js'));

if (!cssFile || jsFiles.length === 0) {
  console.error('Missing build assets');
  process.exit(1);
}

const cssPath = `./assets/${cssFile}`;
const jsPaths = jsFiles.map(f => `./assets/${f}`);

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Muthyalu Bhavesh — Java Backend Developer</title>
  <meta name="description" content="Java Backend Developer with 3.5+ years building high-availability microservices and distributed systems at enterprise scale.">
  <meta property="og:title" content="Muthyalu Bhavesh — Java Backend Developer">
  <meta property="og:description" content="Spring Boot 3 · Java 21 · AWS · Kubernetes. Microservices, async pipelines, and security remediation at AT&T scale.">
  <meta property="og:type" content="website">
  <link rel="stylesheet" href="${cssPath}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <script>
    (function() {
      try {
        var theme = localStorage.getItem('theme');
        if (theme === 'light') document.documentElement.classList.add('light');
      } catch (e) {}
    })();
  </script>
</head>
<body>
  <noscript>You need to enable JavaScript to view this site.</noscript>
  ${jsPaths.map(f => `<script type="module" src="${f}"></script>`).join('\n  ')}
</body>
</html>`;

writeFileSync(join(distClient, 'index.html'), html);
copyFileSync(join(distClient, 'index.html'), join(distClient, '404.html'));

console.log('Generated dist/client/index.html and 404.html');
