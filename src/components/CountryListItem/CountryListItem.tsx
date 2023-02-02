import Link from 'next/link'

interface ICountryListItemProps {
  name: string | undefined
  code: string | undefined
}

export const CountryListItem = ({ name, code }: ICountryListItemProps) => {
  const countryRoute = code?.toLocaleLowerCase()

  return (
    <Link href={`/countries/${countryRoute}`}>
      <div className="flex items-center justify-center p-4 shadow-md bg-neutral-200 hover:bg-neutral-400 duration-300 rounded-md text-center">
        <span>{`${name} (${code})`}</span>
      </div>
    </Link>
  )
}
