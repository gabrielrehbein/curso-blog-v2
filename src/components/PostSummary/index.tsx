
import { PostHeading } from "../PostHeading";
import { formatDatetime } from "@/utils/date";

type PostSummaryProps = {
  createdAt: string,
  title: string,
  excerpt: string
}

export function PostSummary({createdAt, title, excerpt}: PostSummaryProps){
  return <div className='w-full'>
    <time className='text-slate-600 text-sm' dateTime={createdAt}>{formatDatetime(createdAt)}</time>
    <PostHeading as='h2' url='#'>{title}</PostHeading>
    <p className='text-justify'>
      {excerpt}
    </p>
  </div>
}
