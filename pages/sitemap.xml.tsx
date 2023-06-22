import axios from '@/lib/axiosConfig';


const createSitemap = (slugs: any[]) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${slugs
          .map((slug: any) => {
            return `
                <url>
                    <loc>${`https://dev-blog-girish-girishvisaero.vercel.app/${slug}`}</loc>
                </url>
            `;
          })
          .join('')}
    </urlset>
`;
export async function getServerSideProps({ res }: any) {
  // const { data } = await client.query({ query: GET_ALL_SLUGS });
  let resp = await axios.get('/category/slugs');
  let { data } = resp.data;
  console.log('data', data)


  const allPages = [
    ...data.slugs.map(
      (slug: any) => `blog/${slug}`
    ),
    ...data.tags.map(
      (slug: any) => `category/${slug}`
    ),
    ...['', 'about', 'blog', 'blog/code', 'blog/life', 'blog/misc']
  ];

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );
  res.write(createSitemap(allPages));
  res.end();

  return {
    props: {}
  };
}

export default function Sitemap() {
  return null;
}
