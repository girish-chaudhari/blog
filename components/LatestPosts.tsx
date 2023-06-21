import Image from 'next/image';
import Link from 'next/link';
import readingTime from 'reading-time';

export default function LatestPosts({ posts =[]}) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 grid-flow-dense">
      {posts.map((post, i) => {
        
        return (
          <div
            className="bg-white shadow-md rounded-lg dark:bg-gray-800"
            key={i}
          >
            <Link href={'/blog/' +post.slug}>
              <a>
                <div className="mb-2">
                  <Image
                    src={post?.imageUrl}
                    width={672}
                    height={400}
                    alt={post.title}
                    className="image rounded-tl-lg rounded-tr-lg"
                    quality={1}
                    priority
                  ></Image>
                </div>
              </a>
            </Link>
            <div className="p-4 pb-8">
              <Link href={'/blog/' + 'next.js'}>
                <a>
                  <div className="text-sm text-green-700 dark:text-green-300">
                    {readingTime('3').text} - {post.createdDate}
                  </div>
                  <h3 className="mb-3">{' Next.js is a popular framewrokf of react'}</h3>
                </a>
              </Link>
              <div>
                {post.tags.map((tag:string, i) => {
                  return (
                    <Link href={`/category/${tag}`} key={i}>
                      <a className="mr-2 bg-gray-200 dark:bg-gray-600 p-px pr-1 pl-1 rounded-sm">
                        #{tag}
                      </a>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
