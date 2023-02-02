import { CountriesQuery } from '@/generated/graphql'
import { CountryListItem } from '@components'
import React from 'react'

export const CountriesList = ({ countries }: CountriesQuery) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {countries.map(({ code, name }) => (
        <CountryListItem
          key={code}
          code={code}
          name={name}
        />
      ))}
    </div>
  )
}
