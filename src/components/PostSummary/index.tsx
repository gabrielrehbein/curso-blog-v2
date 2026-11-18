
import { PostHeading } from "../PostHeading";
import { formatDatetime } from "@/utils/date";

type PostSummaryProps = {
  createdAt: string,
  title: string,
  excerpt: string,
  url: string,
  author?: string
}

export function PostSummary({ createdAt, title, excerpt, url, author }: PostSummaryProps) {
  return <div className='w-full'>
    <div>
      {author &&
        <span className='text-slate-600 text-sm'>{author} | </span>
      }
      <time className='text-slate-600 text-sm' dateTime={createdAt}>{formatDatetime(createdAt)}</time>
      <PostHeading as='h2' url={url}>{title}</PostHeading>
    </div>
    <p className='text-justify text-xl'>
      {excerpt}
    </p>
  </div>
}
