import type { CodegenConfig } from '@graphql-codegen/cli'

const apiUrl = 'https://countries.trevorblades.com'

const config: CodegenConfig = {
  overwrite: true,
  schema: apiUrl,
  documents: 'src/graphql/**/*.graphql',
  generates: {
    'src/graphql/generated/': {
      preset: 'client',
      plugins: [],
    },
  },
}

export default config
