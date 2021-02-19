import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';
import {useMemo} from 'react';

let apolloClient;

function createApolloClient() {
    const isBrowser: boolean = typeof window === 'undefined';

    return new ApolloClient({
        ssrMode: isBrowser,
        link: new HttpLink({
            uri: !isBrowser ? 'http://localhost/api/graphql' : 'http://nginx/api/graphql',
            credentials: 'same-origin',
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
