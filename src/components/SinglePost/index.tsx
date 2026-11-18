import { findPostBySlugCached } from "@/lib/cache/post/post-cache"
import Image from "next/image";
import { PostHeading } from "../PostHeading";
import { PostSummary } from "../PostSummary";
import ReactMarkDown from "react-markdown"
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

type SinglePostPostProps = {
  slug: string
}

export async function SinglePost({ slug }: SinglePostPostProps) {
  const post = await findPostBySlugCached(slug);
  return (
    <div>
      <div >
        <div className="overflow-hidden rounded mb-4">
          <Image
            className="rounded h-[400px] bg-cover bg-center hover:scale-105 "
            src={post.coverImageUrl}
            width={1200}
            height={800}
            alt={post.title}
          />
        </div>
        <section className="mb-12">
          <PostSummary
            author={post.author}
            url={post.slug}
            createdAt={post.createdAt}
            excerpt={post.excerpt}
            title={post.title}
          />
        </section>
        <section className="prose lg:prose-xl">
          <ReactMarkDown rehypePlugins={[rehypeSanitize]} remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkDown>
        </section>
      </div>
    </div>
  )
}
