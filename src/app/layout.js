import './globals.css';
import Navbar from './components/Navbar';
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "seriu&apos;s Blog",
  description: 'There are articles about programming, motivation, and goal achievement.',
}

const header = (
  <header>
    <div className="text-center bg-sky-800 p-5 my-8 rounded-md">
      <Navbar />
    </div>
  </header>
)

const current_year = new Date().getFullYear();

const footer = (
  <footer>
    <div className="border-t border-slate-400 text-center text-slate-400 py-5 my-8 rounded-md">
      <p>© 2023-{current_year} Created by <a href="https://t.me/+uyadKFfc6TY0ODYy">seriu</a></p>
    </div>
  </footer>
)

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto max-w-2xl px-6">
          {header}
          {children}
          <Analytics />
          {footer}
        </div>
      </body>
    </html>
  )
}
