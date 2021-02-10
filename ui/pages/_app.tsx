import { AppProps } from 'next/app';
import AppLayout from 'shared/layouts/app/AppLayoutComponent';
import 'tailwindcss/tailwind.css';
import 'shared/styles/styles.scss';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'lib/apollo/apolloClient';


function App({Component, pageProps}: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return <ApolloProvider client={ apolloClient }>
    <AppLayout>
      <Component { ...pageProps } />
    </AppLayout>
  </ApolloProvider>;
}

export default App;
