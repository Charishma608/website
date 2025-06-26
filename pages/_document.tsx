
import * as React from 'react';
import Document, {
  Head, Html, Main, NextScript,
} from 'next/document';
import { Server, Sheet } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import styletron from '../lib/styletron';

class MyDocument extends Document <{ stylesheets: Sheet[] }> {
  static getInitialProps = async (ctx: any) => {
    const renderPage = () => ctx.renderPage({
     
      enhanceApp: (App: any) => function (props: any) {
        return (
          <StyletronProvider value={styletron}>
            <App {...props} />
          </StyletronProvider>
        );
      },
    });

    const initialProps = await Document.getInitialProps({ ...ctx, ...renderPage });
    const stylesheets = (styletron as Server).getStylesheets() || [];
    return { ...initialProps, stylesheets };
  };

  render() {
    return (
      <Html>
        <Head>
          {this.props.stylesheets.map((sheet, index) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs['data-hydrate']}
              key={index}
            />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
