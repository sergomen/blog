import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav>
        <div className="text-center">
            <Link href="/" className="text-2xl text-white font-bold mt-4">Kakashi's Blog</Link>
        </div>
    </nav>
  )
}
