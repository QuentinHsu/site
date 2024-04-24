export interface Site {
  website?: string
  author: string
  title: string
  description: string
  tagLine?: string
  lightAndDarkMode: boolean
  postPerPage: number
  avatar?: string
}

export type SocialObjects = {
  name: SocialMedia
  href: string
  active: boolean
  linkTitle: string
}[]

export type SocialIcons = {
  [social in SocialMedia]: string;
}

export type SocialMedia =
  | 'Github'
  | 'Facebook'
  | 'Instagram'
  | 'LinkedIn'
  | 'Mail'
  | 'Twitter'
  | 'Twitch'
  | 'YouTube'
  | 'WhatsApp'
  | 'Snapchat'
  | 'Pinterest'
  | 'TikTok'
  | 'CodePen'
  | 'Discord'
  | 'GitLab'
  | 'Reddit'
  | 'Skype'
  | 'Steam'
  | 'Telegram'
  | 'Mastodon'

export type emojiType =
  | 'openmoji'
  | 'twemoji'
  | 'blobmoji'
  | 'fluent'
  | 'fluentFlat'

export interface OG_Type {
  emojiType: emojiType
  ogImage?: string
}
