import Link from 'next/link';
import ImageWithTheme from '@/components/ImageWithTheme';
import Image from 'next/image';

const NextImage = (props: any) => {
  return (
    <Image
      width={672}
      height={400}
      alt={props.alt}
      src={props.src}
      loading="lazy"
    />
  );
};

const CustomLink = (props: any) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));
  console.log('href', href)

  if (isInternalLink) {
    return (
      <Link href={href} legacyBehavior>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const WatchOnYouTube = (props: any) => {
  return (
    <div className="youtube flex items-center gap-2">
      <Image
        src="/youtube.png"
        alt="YouTube logo"
        width={30}
        height={30}
      ></Image>
      <a href={props.link} target="blank" rel="noopener noreferrer">
        {props?.text && <span>{props.text}</span>}
        {!props?.text && <span>Watch this step</span>}
      </a>
    </div>
  );
};

const MDXComponents = {
  a: CustomLink,
  ImageWithTheme,
  img: NextImage,
  WatchOnYouTube
};

export default MDXComponents;
