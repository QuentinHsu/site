import type { OG_Type, Site, SocialObjects } from './types'

/**
 * @type {Site} SITE Metadata about the site
 */
export const SITE: Site = {
  website: 'https://xqy404.com/',
  author: 'QuentinHsu',
  title: `👨‍💻`,
  description: 'Site description goes here',
  tagLine: '人生本就過的不愉快 那就來點羅曼蒂克',
  lightAndDarkMode: true,
  postPerPage: 10,
  avatar: 'https://avatars.githubusercontent.com/u/21162238?v=4',

}

export const LOCALE = ['zh-CN'] // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
}

export const SOCIALS: SocialObjects = [
  {
    name: 'Github',
    href: 'https://github.com/QuentinHsu',
    linkTitle: `QuentinHsu's Github`,
    active: true,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/QuentinHsu',
    linkTitle: `QuentinHsu's Twitter`,
    active: true,
  },
]

export const OG: OG_Type = {
  emojiType: 'twemoji',
}
