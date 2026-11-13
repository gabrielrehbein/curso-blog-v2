import { postRepository } from "@/repositories/post";
import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export async function PostFeatured() {
  const recentPost = await postRepository.findRecentPost();
  const formatador = new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'full',
    timeStyle: 'short'
  });
  return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group overflow-hidden  rounded'>
      <PostCoverImage
        linkProps={
          {
            href: "/",
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
      <div className='w-full'>
        <time className='text-slate-600 text-sm' dateTime={recentPost.createdAt}>{formatador.format(new Date(recentPost.createdAt))}</time>
        <PostHeading as='h1' url='#'>{recentPost.title}</PostHeading>
        <p className='text-justify'>
          {recentPost.excerpt}
        </p>
      </div>
    </section>
  )
}
