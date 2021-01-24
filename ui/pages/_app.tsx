import { AppProps } from 'next/app';
import { GlobalStyle } from 'shared/styles/global';
import AppLayout from 'shared/ui/layouts/app-layout/AppLayoutComponent';

function App({Component, pageProps}: AppProps) {
  return <>
    <GlobalStyle/>
    <AppLayout>
      <Component { ...pageProps } />
    </AppLayout>
  </>;
}

export default App;
