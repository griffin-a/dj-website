import type { NextApiRequest, NextApiResponse } from "next";

interface AccountRequest extends NextApiRequest {
    username: string,
    password: string
}

export default (req: AccountRequest, res: NextApiResponse) => {
    const { username, password }  = req.body;

    
}