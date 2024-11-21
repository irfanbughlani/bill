import { writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get current directory using ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Function to get date from one minute ago in ISO format
const getOneMinuteAgoDate = () => {
  const date = new Date();
  date.setMinutes(date.getMinutes() - 1);
  return date.toISOString();
};

// Base URL of the website
const BASE_URL = 'https://bill.com.pk';

// List of all routes
const routes = [
  '',  // Homepage
  'lesco',
  'fesco',
  'mepco',
  'hesco',
  'pesco',
  'gepco',
  'sepco',
  'qesco',
  'iesco',
  'tesco'
];

// Generate sitemap content
const generateSitemap = () => {
  const oneMinuteAgo = getOneMinuteAgoDate();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add each route to sitemap
  routes.forEach(route => {
    sitemap += `
  <url>
    <loc>${BASE_URL}/${route}</loc>
    <lastmod>${oneMinuteAgo}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`;
  });

  sitemap += '\n</urlset>';
  return sitemap;
};

// Write sitemap to file
const writeSitemap = () => {
  const sitemap = generateSitemap();
  writeFileSync(join(__dirname, 'public', 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully with timestamp from one minute ago!');
};

// Generate sitemap
writeSitemap();
