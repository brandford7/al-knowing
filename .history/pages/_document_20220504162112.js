import Document, { Html, Head, Main, NextScript } from "next/document";


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {" "}
          <Script
            data-cfasync="false"
            type="text/javascript"
            src="//p439817.clksite.com/adServe/banners?tid=439817_874235_1"
          />
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
