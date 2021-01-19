import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
});

const authLink = setContext((_, { headers}) => {
  return {
    headers: {
      ...headers,
    },
  }
});

export const apolloClient = new ApolloClient({
  link: httpLink,
  fetchOptions: {
    mode: 'no-cors',
  },
  cache: new InMemoryCache(),
});

