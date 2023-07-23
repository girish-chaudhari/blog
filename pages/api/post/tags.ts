import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // const slugData = await prisma.post.findMany({
    //   select: { tags: true }
    // });
    const tagData = await prisma.post.findMany({
      select: { tags: true }
    });
    let allTags: string[] = [];
    console.log('tags ', tagData);
    for (const tag of tagData) {
      allTags = [...allTags, ...tag.tags];
    }

    const onlyUnique = (value: any, index: number, array: []) => {
      return array.indexOf(value) === index;
    }

    let data = allTags.filter(onlyUnique);

    console.log('allTags', allTags);

    return res.status(200).json({
      status: 'success',
      data: data
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
