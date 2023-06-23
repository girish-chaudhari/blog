import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const postHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { tags, currentPostId} = req.body;
  console.log('relative tags is =>', tags);
  try {
    const postData = await prisma.post.findMany({
      where: {
        id:{
          not: currentPostId
        },
        tags: {
          hasSome: tags
        }
      },
      select: {
        title: true,
        description: true,
        imageUrl: true,
        slug: true
      },
      take: 3,
    });
    console.log('postdata ', postData);

    return res.status(200).json({
      status: 'success',
      data: postData
    });
  } catch (error) {
    res.status(500).json({ msg: 'Something went wrong!', status: 'error' });
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
