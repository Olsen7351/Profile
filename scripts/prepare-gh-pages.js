/**
 * After ng build --output-path docs, the app ends up in docs/browser/.
 * This script moves docs/browser/* to docs/ and creates docs/404.html
 * so GitHub Pages can serve the app from the docs folder.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    for (const name of fs.readdirSync(src)) {
      copyRecursive(path.join(src, name), path.join(dest, name));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

const docsDir = path.join(__dirname, '..', 'docs');
const browserDir = path.join(docsDir, 'browser');

if (!fs.existsSync(browserDir)) {
  console.log('No docs/browser folder found; nothing to do.');
  process.exit(0);
}

const entries = fs.readdirSync(browserDir);
for (const name of entries) {
  const src = path.join(browserDir, name);
  const dest = path.join(docsDir, name);
  copyRecursive(src, dest);
}
fs.rmSync(browserDir, { recursive: true });

const indexPath = path.join(docsDir, 'index.html');
const notFoundPath = path.join(docsDir, '404.html');
if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, notFoundPath);
  console.log('Created docs/404.html for GitHub Pages SPA fallback.');
}

console.log('docs/ is ready for GitHub Pages (publish from docs folder).');
