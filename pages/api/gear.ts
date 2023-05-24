import toolsData from '@data/toolsData'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).json(toolsData)
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}
