import React, { ReactElement } from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
  DocumentContext,
} from "next/document";

export default class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang="pt">
        <Head>
          <meta name="description" content="Senior Software Engineer" />
          <link rel="shortcut icon" href="/assets/images/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/assets/images/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/assets/images/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/assets/images/favicon-16x16.png"
          />
        </Head>
        <body className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-300">
          <div>
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    );
  }
}
