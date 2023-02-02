import Head from 'next/head'
import { request } from 'graphql-request'
import { CountriesList, Header } from '@components'
import { CountriesDocument, CountriesQuery } from '@/generated/graphql'

export default function Countries({ countries }: CountriesQuery) {
  return (
    <>
      <Head>
        <title>Countries list</title>
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto p-8 sm:px-24">
        <h1 className="text-4xl mb-8">Countries list</h1>
        <CountriesList countries={countries} />
      </main>
    </>
  )
}

export async function getStaticProps() {
  const { countries } = await request(
    process.env.NEXT_PUBLIC_API_URL as string,
    CountriesDocument
  )

  return {
    props: {
      countries,
    },
  }
}
