import { postRepository } from '@/repositories/post';
import { PostCoverImage } from '../PostCoverImage';
import { PostSummary } from '../PostSummary';

export async function PostsList() {
  const posts = await postRepository.findAll();

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
                  src:post.coverImageUrl,
                  alt: post.title,
                }
              }
            />
            <PostSummary  createdAt={post.createdAt} excerpt={post.excerpt} title={post.title}/>
        </div>
        )

      })}
    </div>
  );
}
