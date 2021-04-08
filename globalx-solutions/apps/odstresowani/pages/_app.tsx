import { AppProps } from 'next/app';
import AppLayout from 'app/components/layouts/app/AppLayoutComponent';
import 'tailwindcss/tailwind.css';
import '../app/styles/styles.scss';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'app/lib/apollo/apolloClient';


function App({Component, pageProps}: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return <ApolloProvider client={ apolloClient }>
    <AppLayout>
      <Component { ...pageProps } />
    </AppLayout>
  </ApolloProvider>;
}

export default App;
