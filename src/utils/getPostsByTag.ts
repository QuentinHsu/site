import type { CollectionEntry } from 'astro:content'
import { slugifyAll } from './slugify'

function getPostsByTag(posts: CollectionEntry<'posts'>[], tag: string) {
  return posts.filter(post => slugifyAll(post.data.tags).includes(tag))
}

export default getPostsByTag
