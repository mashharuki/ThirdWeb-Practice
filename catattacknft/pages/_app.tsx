import {
  ThirdwebProvider,
  embeddedWallet,
  smartWallet
} from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "tailwindcss/tailwind.css";
import { CHAIN, CLIENT_ID, FACTORY_ADDR } from "../utils/constants";

const inter = Inter({
  subsets: ["latin"],
  preload: true,
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={CHAIN}
      clientId={CLIENT_ID}
      supportedWallets={[
        smartWallet(embeddedWallet({
          auth: {
            options: ['email', 'google', 'apple']
          }
        }), {
          factoryAddress: FACTORY_ADDR,
          gasless: false,
        }),
      ]}
    >
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </ThirdwebProvider>
  );
}

export default MyApp;
