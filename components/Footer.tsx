import Link from 'next/link';

const ExternalLink = ({ href, children }: {href: string, children: string}) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/" legacyBehavior>
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="text-gray-500 hover:text-gray-600 transition">
              About
            </a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a className="text-gray-500 hover:text-gray-600 transition">Blog</a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/GirishC0007">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/girish-chaudhari-1595871aa">
            LinkedIn
          </ExternalLink>
          <ExternalLink href="https://github.com/girish-chaudhari">GitHub</ExternalLink>
          
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/blog/code" legacyBehavior>
            <a className="text-gray-500 hover:text-gray-600 transition">Code</a>
          </Link>
          <Link href="/blog/life" legacyBehavior>
            <a className="text-gray-500 hover:text-gray-600 transition">Life</a>
          </Link>
          <Link href="/blog/misc" legacyBehavior>
            <a className="text-gray-500 hover:text-gray-600 transition">Misc</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
