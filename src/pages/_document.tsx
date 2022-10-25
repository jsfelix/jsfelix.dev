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
        <Head />
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
