import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/tailwind.css";
import "../styles/index.css";

const App = ({ Component, pageProps, router }: AppProps) => {
  return <>
    <Toaster position="bottom-right" />
    <Component key={router.route} {...pageProps} />
  </>
}

export default App