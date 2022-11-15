import { gql, ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
})

export const GET_PERSONS = gql`
  query Persons {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`
