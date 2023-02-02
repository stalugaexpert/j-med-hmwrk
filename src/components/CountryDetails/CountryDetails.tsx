import { CountryQuery } from '@/graphql/generated/graphql'

export const CountryDetails = ({ country }: CountryQuery) => {
  return (
    <div className="flex flex-col w-fit p-8 shadow-md bg-neutral-200 rounded-md gap-2">
      <div>
        <span className="font-semibold">Name: </span>
        <span>{country?.name}</span>
      </div>
      <div>
        <span className="font-semibold">Code: </span>
        <span>{country?.code}</span>
      </div>
      <div>
        <span className="font-semibold">Emoji: </span>
        <span>{country?.emoji}</span>
      </div>
      <div>
        <h2 className="font-semibold mb-2">Languages: </h2>
        <ul className="list-disc">
          {country?.languages.map((language) => (
            <li
              className="ml-8"
              key={language.name}
            >
              {language.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
