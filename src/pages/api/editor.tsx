import type { NextApiRequest, NextApiResponse } from 'next'

import metadataList from '@contents/list'

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(metadataList)
}
