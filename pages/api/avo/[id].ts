import { NextApiRequest, NextApiResponse } from "next";
import DB from '@database'

const oneAvo = async(req: NextApiRequest, res: NextApiResponse) => {
    const db = new DB()
    const id = req.query.id
    const oneEntry = await db.getById(id as string)

    res.status(200).json(oneEntry)
}

export default oneAvo