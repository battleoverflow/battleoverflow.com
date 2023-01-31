import { type AppType } from "next/dist/shared/lib/utils";
import PlausibleProvider from "next-plausible";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <PlausibleProvider domain="azazelm3dj3d.com">
      <Component {...pageProps} />
    </PlausibleProvider>
  );
};

export default MyApp;
