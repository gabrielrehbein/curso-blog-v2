import { PostFeatured } from '@/components/PostFeatured';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';


export default async function HomePage() {


  return (
      <>
        <Suspense fallback={<SpinLoader className='mb-16' />} >
          <PostFeatured />
        </Suspense>
        <section>
          <Suspense fallback={<SpinLoader className='mb-16' />} >
            <PostsList />
          </Suspense>
        </section>
      </>
  );
}
