import type { NextApiRequest, NextApiResponse } from 'next'
import { Data } from '@data/data'

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(Data)
}
