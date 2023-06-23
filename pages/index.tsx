import React, { Suspense } from 'react';
import Image from 'next/image';
import Container from '@/components/Container';
import Link from 'next/link';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse justify-between items-start sm:flex-row">
            <div className="flex flex-col pr-8">
              <p className="text-rose-500 dark:text-rose-400">Hi, my name is</p>
              <h1 className="font-bold text-3xl md:text-6xl -ml-0.5 mb-2 text-black dark:text-white">
                Girish Chaudhari
              </h1>
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                Web Developer
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                Currently working at Visaero India, Learning and exploring more
                technologies like (
                <a href="https://react.dev/" target="blank">
                  React
                </a>
                ,{' '}
                <a href="https://nextjs.org/" target="blank">
                  Next.js
                </a>{' '}
                etc) and working on{' '}
                <Link href="/blog/personal-projects">more projects.</Link>{' '}
              </p>
              <div>
                <Image
                  alt="tech"
                  className="rounded-md"
                  src="/mern_stack.png"
                  width={800}
                  height={300}
                />
              </div>
            </div>
            <div className="w-[80px] sm:w-[200px] relative mb-8 sm:mb-0 ">
              <Image
                alt="Girish Chaudhari"
                height={176}
                width={176}
                src="/avatar.png"
                sizes="30vw"
                priority
                className="rounded-full filter grayscale"
              />
            </div>
          </div>
          <span className="h-24" />
        </div>
      </Container>
    </Suspense>
  );
}
