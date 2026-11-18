import Link from "next/link"

type PostHeadingProps = {
  children: React.ReactNode,
  url: string,
  as?: "h1" | "h2"
}


export async function PostHeading({ children, url, as: Tag = "h2" }: PostHeadingProps) {
  const classesByTag = {
    h1: "text-2xl font-bold mb-4 lg:text-3xl hover:text-blue-500",
    h2: "text-2xl font-bold mb-4 hover:text-blue-500",
  }
  return (
    <Tag className={classesByTag[Tag]}>
      <Link href={url}>
        {children}
      </Link>
    </Tag>
  )
}
