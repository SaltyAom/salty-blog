import type { NextApiRequest, NextApiResponse } from 'next'

import { existsSync } from 'fs'
import { resolve } from 'path'

export default (req: NextApiRequest, res: NextApiResponse) => {
    const filePath = resolve('./public/icon/shino.png')

    res.status(200).json(existsSync(filePath) ? 'Existed' : 'Not Existed')
}
