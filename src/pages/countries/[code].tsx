import Head from 'next/head'
import { request } from 'graphql-request'
import { CountryDetails, Header } from '@components'
import {
  CountriesDocument,
  CountryDocument,
  CountryQuery,
} from '@/generated/graphql'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function Country({ country }: CountryQuery) {
  return (
    <>
      <Head>
        <title>{`${country?.name} Details`}</title>
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto p-8">
        <Link
          href="/countries"
          className="flex items-center gap-2 mb-4 hover:opacity-70 hover:-translate-x-1 duration-300"
        >
          <div className="flex items-center justify-center p-2 bg-neutral-800 rounded-md">
            <ArrowLeftIcon className="w-4 h-4 text-neutral-50" />
          </div>
          <span>Back to countries list</span>
        </Link>
        <h1 className="text-4xl mb-8">Country details</h1>
        <CountryDetails country={country} />
      </main>
    </>
  )
}

export async function getStaticPaths() {
  const { countries } = await request(
    process.env.NEXT_PUBLIC_API_URL as string,
    CountriesDocument
  )

  const paths = countries.map((country) => ({
    params: { code: country.code.toLowerCase() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: { code: string } }) {
  const countryCode = params.code.toUpperCase()

  const { country } = await request(
    process.env.NEXT_PUBLIC_API_URL as string,
    CountryDocument,
    { code: countryCode }
  )

  return {
    props: {
      country,
    },
  }
}
