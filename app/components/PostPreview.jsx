import Link from 'next/link';

const PostPreview = (props) => {
  return (
    <div className="border border-sky-200 p-4 rounded-md shadow-md">
      <Link href={`/posts/${props.slug}`}>
         <h2 className="font-bold text-sky-600 hover:underline">{props.title}</h2>
      </Link>
      <p className="text-sm text-slate-400">{props.date}</p>
      <p>{props.subtitle}</p>
      
    </div>
  )
}

export default PostPreview