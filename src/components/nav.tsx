import Link from 'next/link'

const styleLink = {padding: '4px 8px'};

const Nav = () => {
  return (
    <nav>
      <Link href="/?page=0">
        <a style={styleLink}>page 0</a>
      </Link>
      <Link href="/?page=1">
        <a style={styleLink}>page 1</a>
      </Link>
      <Link href="/?page=2">
        <a style={styleLink}>page 2</a>
      </Link>
      <Link href="/ssr1">
        <a style={styleLink}>ssr1</a>
      </Link>
    </nav>
  )
}

export default Nav
