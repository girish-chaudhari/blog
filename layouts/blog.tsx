import { PropsWithChildren, Suspense, useEffect, useState } from 'react';

import Container from '@/components/Container';
import { Post } from '@/lib/types';
import Author from '@/components/Author';
import AboutAuthor from '@/components/AboutAuthor';
import RelativePosts from '@/components/RelativePosts';
import Link from 'next/link';
import { Url } from 'url';
import useDelayedRender from '@/hooks/useDelayedRender';

interface Relative {
  title: string;
  description: string;
  slug: Url;
  imageUrl: string;
}

export default function BlogLayout({
  children,
  post,
  relative
}: PropsWithChildren<{ post: Post; relative: Relative[] }>) {
  const [isnotification, setNotification] = useState(true);
  // const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
  //   isnotification,
  //   {
  //     enterDelay: 20,
  //     exitDelay: 1000
  //   }
  // );

  // useEffect(() => {
  //   setTimeout(() => {
  //     setNotification(true);
  //   }, 100);
  // }, []);

  return (
    <Container
      title={`${post.heading} – Girish chaudhari`}
      description={post.description}
      image={post.socialImage}
      date={post.date}
      tags={post.tags}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        {/* {isMenuMounted && ( */}
          <div
            className={`
            bg-gray-200 dark:bg-slate-700 dark:text-white dark:before:bg-slate-700 text-black mb-8 w-full p-3 rounded relative before:content-[''] before:w-3 before:bg-gray-200 before:h-3 before:rotate-45 before:absolute before:-bottom-1
        flex gap-3 items-center transition-opacity delay-300 ease-in-out
        ${isnotification ? 'opacity-100' : 'opacity-0'}`}
          >
            <div>
              This website has limited features for the blog, In future we will
              be adding more features!
            </div>
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="w-7 h-7 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"
              onClick={() => setNotification(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        {/* )} */}
        <Author readingTime={post.readingTime} date={post.date} />
        <div className="mb-4">
          {post.tags.map((oneTag: string, i: number) => {
            return (
              <Link href={`/category/${oneTag}`} key={i} legacyBehavior>
                <a className="text-lg mr-2 bg-gray-200 dark:bg-gray-600 p-px pr-1 pl-1 rounded-sm">
                  #{oneTag}
                </a>
              </Link>
            );
          })}
        </div>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {post.title}
        </h1>
        <Suspense fallback={null}>
          <div className="w-full prose dark:prose-dark max-w-none">
            {children}
          </div>
        </Suspense>
        <hr className="mt-16 w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
        <AboutAuthor />
        <RelativePosts relative={relative} />
      </article>
    </Container>
  );
}
