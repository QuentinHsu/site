import type { APIRoute } from 'astro'
import { type CollectionEntry, getCollection } from 'astro:content'
import { generateOgImageForPost } from '@utils/generateOgImages'

export async function getStaticPaths() {
  const posts = await getCollection('posts').then(p =>
    p.filter(({ data }) => !data.draft && !data.ogImage),
  )

  return posts.map(post => ({
    params: { slug: post.slug },
    props: post,
  }))
}

export const GET: APIRoute = async ({ props }) => {
  // 当 --mode=production:first 时，GET 需要不执行 generateOgImageForPost()，否则会报错
  if (import.meta.env.MODE === 'production:first')
    return new Response()

  return new Response(await generateOgImageForPost(props as CollectionEntry<'posts'>), {
    headers: { 'Content-Type': 'image/png' },
  })
}
