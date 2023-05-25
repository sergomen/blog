import Image from 'next/image';
import PostPreview from './components/PostPreview';

import getPostMetadata from './utils/getPostMetadata';

export default function HomePage() {
  const postMetadata = getPostMetadata();
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
      />
      {/* <article> */}
          {/* <Image
            src="https://images.unsplash.com/photo-1636678880105-7d853df3bc3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            //https://images.unsplash.com/photo-1683958467836-6940e0e0691b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80
            //https://unsplash.com/photos/QYBVbwJYxNA
            //https://www.deviantart.com/ryantaio/art/Kakashi-Fan-Art-908326015
            className="mx-auto"
            alt="Article's Picture"
            width={300}
            height={300}
          /> */}
          
      {/* </article> */}
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
    </main>
  )
};
