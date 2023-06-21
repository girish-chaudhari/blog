import Container from '@/components/Container';
import LatestPosts from '@/components/LatestPosts';
import axios, { baseURL } from '@/lib/axiosConfig';

export default function Misc({ posts }: any) {
  return (
    <Container
      title="Blog/Life – Girish Chaudhari"
      description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          /blog/life
        </h1>
        <p className="mb-12">
          Everything related to whats going on in my life. This might include
          articles about the sports I play, my hobbies, holidays I take, jobs I
          apply for etc.
        </p>
        <h2 className="mb-4">Latest articles</h2>
        <LatestPosts posts={posts} />
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  // let res = await axios.get('/posts?category=life');
  const resp = await fetch(`${baseURL}/posts?category=life'`);
  let res = await resp.json();

  let { data } = res.data;

  console.log('data', data);

  let arrayForSort = data.sort(function (a: any, b: any) {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  arrayForSort.map(
    (obj: { createdAt: string | number | Date; createdDate: string }) => {
      const options: any = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      const createdAt = new Date(obj.createdAt).toLocaleDateString([], options);

      obj.createdDate = createdAt;

      return obj;
    }
  );

  console.log('arryafor sort =>', arrayForSort);

  return {
    props: {
      posts: arrayForSort
    }
  };
}
