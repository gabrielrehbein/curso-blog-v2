import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";
import { formatDatetime } from "@/utils/date";
import { findAllPublicPostsCached } from "@/lib/cache/post/post-cache";
import { PostSummary } from "../PostSummary";

export async function PostFeatured() {
  const posts = await findAllPublicPostsCached();
  const recentPost = posts[0];

  return (

    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group overflow-hidden  rounded'>
      <PostCoverImage
        linkProps={
          {
            href: `post/${recentPost.slug}`,
          }
        }
        imageProps={
          {
            width: 1200,
            height: 780,
            src: recentPost.coverImageUrl,
            alt: recentPost.title,
            priority: true
          }
        }
      />
      <PostSummary
        author={recentPost.author}
        createdAt={recentPost.createdAt}
        excerpt={recentPost.excerpt}
        title={recentPost.title}
        url={`post/${recentPost.slug}`}
      />
    </section>

  )
}
