import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://countries.trevorblades.com',
  documents: 'src/graphql/**/*.graphql',
  generates: {
    'src/graphql/generated/': {
      preset: 'client',
      plugins: [],
    },
  },
}

export default config
