import { CountryDocument } from '@/graphql/generated/graphql'
import { useQuery } from '@apollo/client'
import { CountryListItem, Header, SpinnerLoader } from '@components'
import Head from 'next/head'

export default function Profile() {
  const { data, error, loading } = useQuery(CountryDocument, {
    variables: { code: 'PL' },
  })

  if (loading)
    return (
      <>
        <Header />
        <main className="max-w-screen-2xl mx-auto p-8 sm:px-24 flex justify-center">
          <SpinnerLoader />
        </main>
      </>
    )

  if (error) return <main>{error.message}</main>

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto p-8 sm:px-24">
        <h1 className="text-4xl mb-8">Profile information</h1>
        <CountryListItem
          code={data?.country?.code}
          name={data?.country?.name}
        />
      </main>
    </>
  )
}
