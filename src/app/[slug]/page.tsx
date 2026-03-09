import { readFile } from "node:fs/promises";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import path from "path";
import { PostData } from "../../types";
import { notFound } from "next/navigation";
import { existsSync } from "fs";
import GoBackButton from "../../components/go-back-button";

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'public', slug, 'index.md');

  if (!existsSync(filePath)) {
    notFound();
  }

  const file = await readFile(filePath, "utf8");

  const { content, data } = matter(file) as unknown as { data: PostData, content: string };

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
      <GoBackButton />
    </main>
  )
}
