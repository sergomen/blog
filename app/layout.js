import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: "Kakashi's Blog",
  description: 'There are articles on programming, motivation, and goal achievement.',
}

const header = (
  <header>
    <div className="text-center bg-sky-800 p-5 my-8 rounded-md">
      <Navbar />
    </div>
  </header>
)

const footer = (
  <footer>
    <div className="border-t border-slate-400 text-center text-slate-400 py-5 my-8 rounded-md">
      <h3>Designed & Developed by Kakashi.</h3>
      <p>2023 © All Rights Reserved.</p>
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
          {footer}
        </div>
      </body>
    </html>
  )
}
