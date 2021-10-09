import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://10.3.6.12:5000/graphql',
});

const createApolloClient = () =>
  new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

export default createApolloClient;
