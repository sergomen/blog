import Link from 'next/link'
import { Home } from 'react-feather'

const header = () => {
  return (
    <header>
        <Link href="/">
            <Home />
        </Link>
    </header>
  )
}

export default header