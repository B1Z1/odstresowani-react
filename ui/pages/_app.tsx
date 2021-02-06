import { AppProps } from 'next/app';
import AppLayout from 'shared/layouts/app/AppLayoutComponent';
import 'tailwindcss/tailwind.css';
import 'shared/styles/styles.scss';

function App({Component, pageProps}: AppProps) {
  return <>
    <AppLayout>
      <Component { ...pageProps } />
    </AppLayout>
  </>;
}

export default App;
