import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query;
  const { tag } = query as { tag: string };
  console.log('query is =>', tag);
  try {
    const postData = await prisma.post.findMany({
      where: {
        tags: {
          hasEvery: [tag]
        }
      },
      orderBy:[
        {createdAt: 'desc'}
      ]
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

      return res.status(200).json({
        status: 'success',
        msg: 'ohh ho! you might have accessed wrong data!'
      });
  }
}
