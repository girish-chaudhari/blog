import Container from '@/components/Container';
import LatestPosts from '@/components/LatestPosts';
import axios, { baseURL } from '@/lib/axiosConfig';
import Link from 'next/link';


export default function Code({ posts }:any) {
  return (
    <Container
      title="Blog/Code – Girish Chaudhari"
      description="Everything code in my life"
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          /blog/code
        </h1>
        <div className="mb-12">
          <p className="mb-3">
            Here you can find articles about everything web dev. I like to write
            &apos;how to&apos;s&apos; about specific topics e.g. Angular 2+,
            Next.js, Heroku etc, as well as broader topics about the life of a
            web developer.
          </p>
          <p>
            You can search{' '}
            <Link href={'/category'}>
              <a>by category. </a>
            </Link>
          </p>
        </div>
        <h2 className="mb-4">Latest articles</h2>
        <LatestPosts posts={posts} />
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  // let res = await axios.get('/posts?category=code');
  const resp = await fetch(`${baseURL}/posts?category=code'`)
  let res = await resp.json()

  let { data } = res.data;

  console.log('data', data);

  let arrayForSort = data.sort(function (a: any, b: any) {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  arrayForSort.map((obj: { createdAt: string | number | Date; createdDate: string; }) => {
    const options: any = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    const createdAt = new Date(obj.createdAt).toLocaleDateString([], options);

    obj.createdDate = createdAt;

    return obj;
  });

  console.log('arryafor sort =>', arrayForSort);

  return {
    props: {
      posts: arrayForSort
    }
  };
}
