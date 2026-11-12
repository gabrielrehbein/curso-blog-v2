import { Header } from '@/components/Header';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { postRepository } from '@/repositories/post';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function HomePage() {

  const recentPost = await postRepository.findRecentPost();
  const formatador = new Intl.DateTimeFormat('pt-BR', {
  dateStyle: 'full',
  timeStyle: 'short'
});
  return (
        <>
        <section>
          <Link href={"/"}
            className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group overflow-hidden'
          >
            <Image
              width={1200}
              height={780}
              src={recentPost.coverImageUrl}
              alt='Imagem principal'
              className='rounded group-hover:scale-105 transition'
              priority
            />
            <div className='w-full'>
              <time className='text-slate-600 text-sm' dateTime={recentPost.createdAt}>{formatador.format(new Date(recentPost.createdAt))}</time>
              <h1 className='text-2xl font-bold mb-4'>{recentPost.title}</h1>
              <p className='text-justify'>
                {recentPost.excerpt}
              </p>
            </div>
          </Link>
        </section>
      </>
  );
}
