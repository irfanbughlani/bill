import fs from 'fs';
import { format } from 'date-fns';

const baseUrl = 'https://bill.com.pk';

// List of all routes
const routes = [
  '/',
  '/lesco',
  '/fesco',
  '/mepco',
  '/hesco',
  '/pesco',
  '/gepco',
  '/sepco',
  '/qesco',
  '/iesco',
  '/tesco'
];

// Generate sitemap XML content
const generateSitemap = () => {
  const today = new Date();
  const formattedDate = format(today, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${formattedDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync('public/sitemap.xml', xmlContent);
  console.log('Sitemap generated successfully!');
};

generateSitemap();
