import { findPostBySlugCached } from "@/lib/cache/post/post-cache"

type SinglePostPostProps = {
  slug: string
}

export async function SinglePost({slug}: SinglePostPostProps){
  const post = await findPostBySlugCached(slug);
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  )
}
