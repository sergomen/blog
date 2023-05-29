import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
        <div className="text-center">
            <Link href="/" className="text-2xl text-white font-bold mt-4">seriu&#39;s Blog</Link>
        </div>
    </nav>
  )
}
