import { NowRequest, NowResponse } from '@vercel/node';

const routes: any = {
  twitter: 'https://twitter.com/_iGalaxyYT',
  youtube: 'https://youtube.com/c/WhiteGalaxyOfficial',
  twitch: 'https://twitch.tv/igalaxyofficial',
  github: 'https://github.com/iGalaxyYT',
  source: 'https://github.com/iGalaxyYT/url-shortener-vercel',
  porpoise: 'https://github.com/porpoise/porpoise',
  typeskript: 'https://github.com/TypeSkript'
}

export default (req: NowRequest, res: NowResponse) => {
  const route = routes[req.query.route as string] || 'https://igalaxy.dev?routeError=true';
  console.log(route);
  res.redirect(route);
}