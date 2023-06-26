import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
        <div className="text-center">
            <Link href="/" className="text-2xl text-gray-300 font-bold mt-4 no-underline hover:text-white">seriu</Link>
        </div>
    </nav>
  )
}
