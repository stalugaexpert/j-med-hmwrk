import Link from 'next/link'

export const Header = () => {
  return (
    <header className="flex items-center gap-8 p-6 bg-neutral-800">
      <Link
        className="text-neutral-100 font-semibold text-xl hover:text-neutral-400 duration-300"
        href="/"
      >
        Home
      </Link>
      <Link
        className="text-neutral-100 font-semibold text-xl hover:text-neutral-400 duration-300"
        href="/countries"
      >
        Countries
      </Link>
      <Link
        className="text-neutral-100 font-semibold text-xl hover:text-neutral-400 duration-300"
        href="/profile"
      >
        Profile
      </Link>
    </header>
  )
}
