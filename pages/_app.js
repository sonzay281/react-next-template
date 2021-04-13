import Head from "next/head";

import { init, ErrorBoundary } from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import NProgress from "nprogress";
import { Router, useRouter } from "next/router";
import { wrapper } from "../store";

import "nprogress/nprogress.css";

init({
  dsn:
    "https://81728d51074e4744bd0cb4ed0041025c@o470176.ingest.sentry.io/5500466",
  integrations: [new Integrations.BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

Router.events.on("routeChangeStart", (url) => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const App = ({ Component, pageProps }) => {
  return (
    <ErrorBoundary fallback={"An error has occured"}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="google-signin-client_id"
          content={process.env.NEXT_PUBLIC_GOOGLE_APP_ID}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>React-Next Templte</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000" />
      </Head>

      <Component {...pageProps} />
    </ErrorBoundary>
  );
};

export default wrapper.withRedux(App);
