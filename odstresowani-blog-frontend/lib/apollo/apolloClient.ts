import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { useMemo } from 'react';

let apolloClient;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: 'http://127.0.0.1:1337/graphql'
    }),
    cache: new InMemoryCache()
  });
}

export function initializeApollo(initialState?: Object) {
  const _apolloClient = apolloClient || createApolloClient();

  if (initialState) {
    const existingCache = _apolloClient.extract();

    _apolloClient.cache.restore({...existingCache, ...initialState});
  }

  if (typeof window === 'undefined') {
    return _apolloClient;
  }

  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo(initialState: Object) {
  return useMemo(() => initializeApollo(initialState), [initialState]);
}
