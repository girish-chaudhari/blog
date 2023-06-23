import Link from 'next/link';
import Container from '@/components/Container';

export default function About() {
  return (
    <Container title="About – Girish Chaudhari">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          /about
        </h1>
        <p className="text-black dark:text-white mb-4">
          My name is Girish Chaudhari and I am a Web developer{' '}
          <a
            href="https://en.wikipedia.org/wiki/Jalgaon_district"
            target="blank"
            rel="noopener noreferrer"
          >
            Jalgaon, Maharashtra, India
          </a>
          .
        </p>
        <p className="text-black dark:text-white mb-4">
          I am a Software Developer at Visaero India, and since this is my
          second job, I worked full-time for a local company as a web developer,
          From Bachelor's Degree to Software Developer: My Journey and 1+ Year
          Experience
        </p>
        <p className="text-black dark:text-white mb-6">
          Welcome to my blog, where I'll be sharing my personal journey from
          completing my Bachelor's degree in Computer Applications to joining
          the workforce as a software developer. Over the past year, I've gained
          valuable experience in the industry, and I'm excited to share my
          insights, challenges, and accomplishments with you. Also, since I
          started making a blog, I have started working on many more{' '}
          <Link href="blog/personal-projects">personal coding projects.</Link>{' '}
          This has enabled me to learn new skills, such as Next.js, reactjs,
          prisma and much more.
        </p>
        <h2>Reflections and Lessons Learned: </h2>
        <p className="text-black dark:text-white mb-6">
          {/* <a href="https://wheretaken.teuteuf.fr">WhereTaken</a>  */}
          In the final section, I'll reflect on my journey so far and share the
          key lessons I've learned. I'll discuss the importance of perseverance,
          adaptability, and a growth mindset in the software development
          industry. Additionally, I'll provide insights into building a
          successful career as a software developer, maintaining work-life
          balance, and setting realistic goals for professional growth.
        </p>
        <h2 className="text-black dark:text-white mb-4">Get in contact</h2>
        <ul>
          <li>
            {'>  '}
            <a
              href="https://www.linkedin.com/in/girish-chaudhari-1595871aa/"
              target="blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            {'>  '}
            <a
              href="mailto:girishvishnuc98@gmail.com"
              target="blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
}
