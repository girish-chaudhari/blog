import Container from '@/components/Container';
import LatestPosts from '@/components/LatestPosts';
import axios from '@/lib/axiosConfig';


export default function Misc({ posts }: any) {
  return (
    <Container
      title="Blog/Misc – Girish Chaudhari"
      description="Had a random thought, decided to write about it here."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          /blog/misc
        </h1>
        <p className="mb-12">
          Had a random thought about something, wrote about it here.
        </p>
        <h2 className="mb-4">Latest articles</h2>
        <LatestPosts posts={posts} />
      </div>
    </Container>
  );
}


export async function getStaticProps() {
  let res = await axios.get('/posts?category=misc');

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
