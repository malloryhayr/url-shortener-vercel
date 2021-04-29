import { NowRequest, NowResponse } from '@vercel/node';

const routes: {[key: string]: string} = {
  notify: 'https://sub.to/igalaxy',
  twitter: 'https://twitter.com/_iGalaxyYT',
  youtube: 'https://youtube.com/c/WhiteGalaxyOfficial',
  twitch: 'https://twitch.tv/igalaxyofficial',
  github: 'https://github.com/iGalaxyYT',
  discord: 'https://discord.gg/wjtQFPP',
  source: 'https://github.com/iGalaxyYT/url-shortener-vercel',
  porpoise: 'https://github.com/porpoise/porpoise',
  typeskript: 'https://github.com/TypeSkript'
}

export default (req: NowRequest, res: NowResponse) => {
  const route = routes[req.query.route as string] || 'https://igalaxy.dev';
  res.redirect(route);
}
