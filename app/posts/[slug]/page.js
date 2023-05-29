import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetadata from '../../utils/getPostMetadata';

const getPostContent = (slug) => {
  const folder = `posts/`;
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);
  return matterResult;
}

const PostPage = (props) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-4xl text-sky-500 font-bold text-center mb-4">{post.data.title}</h1>
        <p className="text-slate-400 mt-2 text-center">{post.data.date}</p>
      </div>

      <article className="prose">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  )
}

export default PostPage

export const generateStaticParams = async() => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};