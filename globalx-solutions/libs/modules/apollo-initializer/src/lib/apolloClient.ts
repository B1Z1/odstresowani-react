import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { useMemo } from 'react';

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient(): ApolloClient<NormalizedCacheObject> {
  const isBrowser: boolean = typeof window !== 'undefined';

  const linkUri: string = isBrowser
    ? `${process.env.NEXT_PUBLIC_HOST_API_URL}/graphql`
    : `${process.env.HOST_SSR_API_URL}/graphql`;

  return new ApolloClient({
    ssrMode: isBrowser,
    link: new HttpLink({
      uri: linkUri,
      credentials: 'same-origin',
    }),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState?: Record<string, unknown>) {
  const _apolloClient: ApolloClient<NormalizedCacheObject> =
    apolloClient || createApolloClient();

  if (initialState) {
    const existingCache = _apolloClient.extract();

    _apolloClient.cache.restore({
      ...existingCache,
      ...initialState,
    } as NormalizedCacheObject);
  }

  if (typeof window === 'undefined') {
    return _apolloClient;
  }

  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo(initialState: Record<string, unknown>) {
  return useMemo(() => initializeApollo(initialState), [initialState]);
}
