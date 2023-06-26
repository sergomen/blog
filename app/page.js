import Image from 'next/image';
import PostPreview from './components/PostPreview';

import { getSortedPostsData } from './utils/getSortedPostsData';

export default function HomePage() {
  const postMetadata = getSortedPostsData();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <main className="text-center">
      <Image 
        src="/logo.jpg"
        width={400}
        height={400}
        className="mx-auto"
        alt="kakashi"
      />
      drawed by <a href="https://www.deviantart.com/ryantaio/art/Kakashi-Fan-Art-908326015" className="text-sky-400">ryantaio</a>
      <br />
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
    </main>
  )
};
