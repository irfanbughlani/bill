const { writeFileSync } = require('fs');

// Helper function to get the current date and time in ISO format
function getCurrentDate() {
  return new Date().toISOString();
}

// Define your URLs and their properties
const urls = [
  { loc: 'https://bill.com.pk/', changefreq: 'always', priority: '1.0', lastmod: getCurrentDate() },
  { loc: 'https://bill.com.pk/lesco', changefreq: 'always', priority: '1.0', lastmod: getCurrentDate() },
  { loc: 'https://bill.com.pk/fesco', changefreq: 'always', priority: '1.0', lastmod: getCurrentDate() },
  { loc: 'https://bill.com.pk/mepco', changefreq: 'always', priority: '1.0', lastmod: getCurrentDate() },
  { loc: 'https://bill.com.pk/hesco', changefreq: 'always', priority: '1.0', lastmod: getCurrentDate() },
  { loc: 'https://bill.com.pk/pesco', changefreq: 'always', priority: '1.0', lastmod: getCurrentDate() },
  { loc: 'https://bill.com.pk/gepco', changefreq: 'always', priority: '1.0', lastmod: getCurrentDate() },
  { loc: 'https://bill.com.pk/sepco', changefreq: 'always', priority: '1.0', lastmod: getCurrentDate() },
  { loc: 'https://bill.com.pk/qesco', changefreq: 'always', priority: '1.0', lastmod: getCurrentDate() },
  { loc: 'https://bill.com.pk/iesco', changefreq: 'always', priority: '1.0', lastmod: getCurrentDate() },
  { loc: 'https://bill.com.pk/tesco', changefreq: 'always', priority: '1.0', lastmod: getCurrentDate() },
    // Add more URLs as needed
];

// Build the XML string
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

urls.forEach((url) => {
  xml += '  <url>\n';
  xml += `    <loc>${url.loc}</loc>\n`;
  xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
  xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
  xml += `    <priority>${url.priority}</priority>\n`;
  xml += '  </url>\n';
});

xml += '</urlset>';

// Write the XML string to sitemap.xml
writeFileSync('sitemap.xml', xml);
console.log('Sitemap generated successfully with current time for <lastmod>');
