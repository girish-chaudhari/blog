import components from '@/components/MDXComponents';
import BlogLayout from '@/layouts/blog';
import { baseURL } from '@/lib/axiosConfig';
import { mdxToHtml } from '@/lib/mdx';
import { Post } from '@/lib/types';
import { MDXRemote } from 'next-mdx-remote';

export default function PostPage({ post }: { post: Post }) {
  return (
    <>
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
    </>
  );
}

export async function getStaticPaths() {
  // let resp = await axios.get('/post/slugs');

  const resp = await fetch(`${baseURL}/post/slugs`, {
    method: `GET`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  // console.log('base url =>', `${baseURL}/posts/slugs`)
  let res = await resp.json();

  let { data } = res;
  console.log('data', data)
  let paths = data.map((obj: any) => {
    return { params: obj };
  });
  console.log('slugs >>', paths);
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params, preview = false }: any) {
  console.log('slugs data =>', params);
  // let res = await axios.get(`/post?slug=${params.slug}`);
  const resp = await fetch(`${baseURL}/post?slug=${params.slug}`, {
    method: `GET`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  if (resp.ok) {
    let res = await resp.json();

    console.log('res >>', res.data.content);
    let { data } = res;
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
  } else {
    return {
      props: {
        post: {}
      }
    };
  }
}
