import { NowRequest, NowResponse } from '@vercel/node';

export default (req: NowRequest, res: NowResponse) => {
  res.redirect(`https://igalaxy.dev?redirect=true&query=${req.query}`);
}