import Image from 'next/image';
import { PropsWithChildren } from 'react';
import { Url } from 'url';

interface Relative {
  title: string;
  description: string;
  slug: Url;
  imageUrl: string;
}

function PostImage({
  children,
  link,
  alt,
  imgSrc
}: PropsWithChildren<{ link: any; alt: string; imgSrc: string }>) {
  return (
    <a href={link} rel="noopener noreferrer" target="_blank">
      <Image
        src={imgSrc}
        width={400}
        height={400}
        alt={alt}
        className="rounded-lg h-[150px] object-cover w-full"
      ></Image>
      {children}
    </a>
  );
}

export default function RelativePosts({ relative = []}: {relative: Relative[]}) {
  return (
    <div className="mt-16 w-full">
      <h3>Check out some of relative posts</h3>
      <div className="flex gap-3 flex-col sm:flex-row sm:gap-12">
        {relative.map((post, i) => (
          <div className="mt-6 w-8/12 sm:w-3/12 " key={i}>
            <PostImage
              link={post?.slug}
              alt={post?.title}
              imgSrc={post?.imageUrl}
            ></PostImage>
            <div>
              <h4 className='truncate'>{post?.title}</h4>
              <p>{post?.description}.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
