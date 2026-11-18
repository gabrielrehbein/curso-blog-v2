import { PostCoverImage } from '../PostCoverImage';
import { PostSummary } from '../PostSummary';
import { findAllPublicPostsCached } from '@/lib/cache/post/post-cache';

export async function PostsList() {
  const posts = (await findAllPublicPostsCached()).slice(1);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
      {posts.map(post => {
        return (
          <div className='flex flex-col gap-4 group'
            key={post.id}>
            <PostCoverImage
              linkProps={
                {
                  href: `/post/${post.slug}`,
                  className: "block"
                }
              }
              imageProps={
                {
                  width: 1200,
                  height: 720,
                  src: post.coverImageUrl,
                  alt: post.title,
                }
              }
            />
            <PostSummary url={`/post/${post.slug}`} createdAt={post.createdAt} excerpt={post.excerpt} title={post.title} />
          </div>
        )

      })}
    </div>
  );
}
