import React, { ReactElement, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import { BaseProvider } from 'baseui';
import { Provider as StyletronProvider } from 'styletron-react';
import { NextPage } from 'next';
import SkillexTheme from '../lib/theme';
import styletron from '../lib/styletron';
import '../styles/globals.css';

type NextPageWithLayout = NextPage & {
    // eslint-disable-next-line no-unused-vars
    getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={SkillexTheme}>
        {getLayout(<Component {...pageProps} />)}
      </BaseProvider>
    </StyletronProvider>
  );
}

export default MyApp;
