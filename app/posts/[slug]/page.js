// TODO: This can be deleted

// import fs from 'fs';
import Markdown from 'markdown-to-jsx';
// import matter from 'gray-matter';
import { getSortedPostsData, getPostData } from '../../utils/getSortedPostsData';
// import path from 'path'
import { notFound } from 'next/navigation'
import Link from 'next/link'

// const folder = `posts/`;

export const generateStaticParams = async() => {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export function generateMetadata(props) {
  // const post = getPostContent(slug);
  const posts = getSortedPostsData()
  const slug = props.params.slug;
  
  const post = posts.find(post => post.slug === slug)

  if (!post) {
      return {
          title: 'Post Not Found'
      }
  }

  return {
      title: post.title,
      description: post.subtitle,
  }
}

// const getPostContent = (slug) => {
//   const file = `${folder}${slug}.md`;
//   const content = fs.readFileSync(file, 'utf8');
//   const matterResult = matter(content);
//   return matterResult;
// }

export default async function PostPage({ params }) {
  // const posts = getSortedPostsData();
  // if (!posts.find(post => post.slug === slug)) notFound();
  const { slug } = await params;
  console.log("slug", slug);
  // const filename = "public/" + slug + "/index.md";
  // console.log(filename);
  // const file = 

  // const { title, date, contentHTML } = getPostData(slug);

  return (
    <main>
      {/* <div className="my-12 text-center">
        <h1 className="text-4xl text-sky-500 font-bold text-center mb-4">{title}</h1>
        <p className="text-slate-400 mt-2 text-center">{date}</p>
      </div>

      <article className="prose">
        <section>
          <Markdown>{contentHTML}</Markdown>
        </section>
        <p>
          <Link href="/">Back to home</Link>
        </p>
      </article> */}
    </main>
  )
}
