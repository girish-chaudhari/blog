import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query;
  const { category } = query as { category: any };
  console.log('query is =>', category);
  try {
    // const postData = await prisma.post.findMany({
    //   category: Category.code
    // });

    const postData = await prisma.post.findMany({
      where: {
        category: category
      }
    });

    console.log('postdata ', postData);

    return res.status(200).json({
      status: 'success',
      data: postData
    });
  } catch (error) {
    console.log('error >>', error);
    res
      .status(500)
      .json({ msg: 'Something went wrong!', status: 'error', data: [] });
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
