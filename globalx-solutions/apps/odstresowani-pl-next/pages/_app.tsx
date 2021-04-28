import { ApolloProvider } from '@apollo/client';
import '@globalx-solutions/assets/styles/styles.scss';
import { useApollo } from '@globalx-solutions/modules/apollo-initializer';
import { AppLayout } from '@globalx-solutions/shared/layouts/default-app';
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ApolloProvider>
  );
}

export default App;
