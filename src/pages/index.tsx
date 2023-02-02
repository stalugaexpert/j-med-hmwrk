import { Header } from '@components'
import Head from 'next/head'
import { UserCircleIcon, GlobeAltIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Countries App</title>
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto p-8 sm:px-24">
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/countries">
            <div className="flex flex-col items-center gap-4 p-8 rounded-md shadow-xl border hover:translate-y-1 hover:opacity-70 duration-300">
              <GlobeAltIcon className="w-24 h-24" />
              <span className="text-xl">Countries list</span>
            </div>
          </Link>
          <Link href="/profile">
            <div className="flex flex-col items-center gap-4 p-8 rounded-md shadow-xl border hover:translate-y-1 hover:opacity-70 duration-300">
              <UserCircleIcon className="w-24 h-24" />
              <span className="text-xl">Profile</span>
            </div>
          </Link>
        </div>
      </main>
    </>
  )
}
