import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { PropsWithChildren } from 'react'

const CountriesApolloProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_URL as string,
    cache: new InMemoryCache(),
  })

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default CountriesApolloProvider
