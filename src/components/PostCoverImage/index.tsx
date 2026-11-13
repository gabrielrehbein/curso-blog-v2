import Image from 'next/image';
import Link from 'next/link';

type PostCoverImageProps = {
  imageProps: React.ComponentProps<typeof Image>;
  linkProps: React.ComponentProps<typeof Link>;
};

export async function PostCoverImage({imageProps, linkProps}: PostCoverImageProps){
  
  return (
    <Link {...linkProps}
    className={`overflow-hidden rounded-xl h-full w-full`}>
      <Image
        {...imageProps}
        className={`group-hover:scale-105 transition w-full h-full bg-cover object-center ${imageProps.className}`}

        alt={imageProps.alt}
      />
    </Link>
  )

}
