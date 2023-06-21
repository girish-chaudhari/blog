import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query;
  const { slug } = query;
  console.log('query is =>', slug);
  try {
    const postData = await prisma.post.findUnique({
      where: {
        slug: slug as string
      }
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
    case 'GET':
      return getHandler(req, res);

    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
