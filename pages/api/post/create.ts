import { Post, Prisma } from '@prisma/client';
import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const postHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    category,
    title,
    content,
    heading,
    imageUrl,
    slug,
    tags,
    description,
    authorId
  } = req.body as Post;

  console.log('body', req.body);
  try {
    const post = await prisma.post.create({
      data: {
        category,
        authorId,
        title,
        content,
        heading,
        imageUrl,
        slug,
        tags,
        description
      }
    });
    console.log('postdata ', post);

    return res.status(200).json({
      status: 'success',
      data: post
    });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2002') {
        console.log('err =>', e)
        console.log(
          'There is a unique constraint violation, a new user cannot be created with this email'
        );
        return res
          .status(500)
          .json({ msg: 'slug is allready exits', status: 'error' });
      }
    }
    console.log('err =>', e);
    return res
      .status(500)
      .json({ msg: 'Something went wrong!', status: 'error' });
  }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      return postHandler(req, res);

    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
