import Link from 'next/link'

const styleLink = {padding: '4px 8px'};

const Nav = () => {
  return (
    <nav>
      <Link href="/">
        <a style={styleLink}>Index</a>
      </Link>
      <Link href="/ssg">
        <a style={styleLink}>SSG</a>
      </Link>
      <Link href="/ssr">
        <a style={styleLink}>SSR</a>
      </Link>
    </nav>
  )
}

export default Nav
