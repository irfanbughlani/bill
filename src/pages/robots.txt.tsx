// pages/robots.txt.tsx

import { NextPage } from 'next';

const RobotsTxt: NextPage = () => {
  return null; // No HTML output needed for this page
};

// Set response headers to serve as plain text
export async function getServerSideProps({ res }: { res: any }) {
  res.setHeader('Content-Type', 'text/plain');
  res.write(`User-agent: *
Allow: /
Disallow: /disclaimer
Disallow: /about
Disallow: /contact
Disallow: /privacy-policy

Sitemap: https://bill.com.pk/sitemap.xml`);
  res.end();

  return {
    props: {},
  };
}

export default RobotsTxt;
