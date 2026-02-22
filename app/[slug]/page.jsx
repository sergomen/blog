import { readFile } from "fs/promises";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
// import path from "node:path";

export default async function PostPage({ params }) {
  const { slug } = await params;

  const path = await import('node:path');
  const filePath = path.join(process.cwd(), 'public', slug, 'index.md');
  const file = await readFile(filePath, "utf8");

  const { content, data } = matter(file);

  const fixedContent = content.replace(
    /!\[(.*?)\]\(\.?\/(.*?)\)/g, 
    `![$1](/${slug}/$2)`
  );

  return (
    <main>
      <article className="prose">
        <h1 className="mb-4 text-4xl text-center font-bold text-sky-500">{data.title}</h1>
        <p className="mt-2 text-center text-slate-400">{data.date}</p>
        <Markdown>
          {fixedContent}
        </Markdown>
      </article>
      <nav className="mt-8">
        <Link href="/" className="hover:underline">← Back</Link>
      </nav>
    </main>
  )
}
