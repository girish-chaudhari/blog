import { MDXRemote } from 'next-mdx-remote';
import BlogLayout from '@/layouts/blog';
import components from '@/components/MDXComponents';
import { mdxToHtml } from '@/lib/mdx';
import { Post } from '@/lib/types';
import axios, { baseURL } from '@/lib/axiosConfig';


export default function PostPage({ post }: { post: Post }) {
  return (
    <BlogLayout post={post}>
      <MDXRemote
        {...post.content}
        components={
          {
            ...components
          } as any
        }
      />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  let resp = await axios.get('/post/slugs');
  let { data } = resp.data;
  let paths = data.map((obj: any) => {
    return { params: obj };
  });
  console.log("slugs >>", paths)
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params, preview = false }: any) {
  console.log('slugs data =>', params)
  // let res = await axios.get(`/post?slug=${params.slug}`);
  const resp = await fetch(`${baseURL}/post?slug=${params.slug}`)
  let res = await resp.json()

  console.log('res >>', res.data.data.content);
  let { data } = res.data;
  const { html, readingTime } = await mdxToHtml(data.content);

  const options: any = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  let date = new Date(data.createdAt).toLocaleDateString([], options);

  return {
    props: {
      post: {
        heading: data.heading,
        content: html,
        description: data.description,
        date: date,
        socialImage: data.slug,
        tags: data.tags,
        readingTime: readingTime,
        tag: data.tags
      }
    }
  };
}
