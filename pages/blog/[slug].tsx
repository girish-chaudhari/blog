import components from '@/components/MDXComponents';
import BlogLayout from '@/layouts/blog';
import { baseURL } from '@/lib/axiosConfig';
import { mdxToHtml } from '@/lib/mdx';
import { Post } from '@/lib/types';
import { MDXRemote } from 'next-mdx-remote';
import { Url } from 'url';

interface Relative {
  title: string;
  description: string;
  slug: Url;
  imageUrl: string;
}

export default function PostPage({
  post,
  relative
}: {
  post: Post;
  relative: Relative[];
}) {
  return (
    <>
      <BlogLayout post={post} relative={relative}>
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
  console.log('data', data);
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

    const relativeResp = await fetch(`${baseURL}/post/relative`, {
      method: `POST`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        tags: data?.tags || ''
      })
    });

    let relRes = await relativeResp.json();

    let { data: relData } = relRes;

    console.log('relativeResp', relRes);
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
        },
        relative: relData
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
