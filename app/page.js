import Image from "next/image";
import PostPreview from "./components/PostPreview";
import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import Link from "next/link";
import path from 'path';

async function getPosts() {
  const publicDir = path.join(process.cwd(), 'public');

  const entries = await readdir(publicDir, { withFileTypes: true });
  const dirs = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  const fileContents = await Promise.all(
    dirs.map((dir) => readFile(path.join(publicDir, dir, "index.md"), "utf8")),
  );
  const posts = dirs.map((slug, i) => {
    const fileContent = fileContents[i];
    const { data } = matter(fileContent);
    return { slug, ...data };
  });
  posts.sort((a, b) => {
    return Date.parse(a.date) < Date.parse(b.date) ? 1 : -1;
  });
  return posts;
}

export default async function HomePage() {
  const posts = await getPosts();
  const postPreviews = posts.map((post) => (
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
      drawed by <Link href="https://www.deviantart.com/ryantaio/art/Kakashi-Fan-Art-908326015" className="text-sky-400">ryantaio</Link>
      <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2">{postPreviews}</div>
    </main>
  )
};
