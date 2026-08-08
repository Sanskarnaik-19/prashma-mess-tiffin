export default function sitemap() {
  const baseUrl = 'https://www.prashmamess.com';
  
  const routes = [
    '',
    '/about',
    '/services',
    '/pricing',
    '/delivery-areas',
    '/testimonials',
    '/faq',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
