import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData () {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get slug
    const slug = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    const blogPost = {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
    }

    return blogPost
  })


  // const markdownPosts = files.filter((file) => file.endsWith('.md'));

  // const posts = markdownPosts.map((fileName) => {
  //   const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
  //   const matterResult = matter(fileContents);

  //   return {
  //     title: matterResult.data.title,
  //     date: matterResult.data.date,
  //     subtitle: matterResult.data.subtitle,
  //     slug: fileName.replace('.md', ''),
  //   };
  // });

  // return posts

  // Combine the data with the id
  return allPostsData.sort((a, b) => a.date > b.date ? 1 : -1)
};

export function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)
  
  // return matterResult
  // const processedContent = await remark

  const blogPostWithHTML = {
    title: matterResult.data.title,
    date: matterResult.data.date,
    subtitle: matterResult.data.subtitle,
    contentHTML: matterResult.content
  }

  return blogPostWithHTML
}

