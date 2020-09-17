import Link from 'next/link'

export default function Home() {
  return (
    <div>
      Hello World.{' '}
      <div>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <div>
        <Link href="/error">
          <a>Error</a>
        </Link>
      </div>
    </div>
  )
}
