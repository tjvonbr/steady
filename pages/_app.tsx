import React from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Auth0Provider } from "@auth0/auth0-react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      clientId="pMUW2uh44rd2SOsOUClSUyDpwdTMEBX3"
      domain="dev-3nnsw5pu.us.auth0.com"
      redirectUri="http://localhost:3000"
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}

export default MyApp;
