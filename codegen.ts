import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_API_URL as string,
  documents: 'src/graphql/**/*.graphql',
  generates: {
    'src/generated/': {
      preset: 'client',
      plugins: [],
    },
  },
}

export default config
