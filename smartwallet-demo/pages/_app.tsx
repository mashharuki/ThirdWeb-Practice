import { ScrollSepoliaTestnet } from "@thirdweb-dev/chains";
import { ThirdwebProvider, embeddedWallet, smartWallet } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import { ACCOUNT_FACTORY_ADDRESS } from "../const/addresses";
import "../styles/globals.css";



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={ScrollSepoliaTestnet}
      supportedWallets={[
				embeddedWallet(),
        smartWallet(embeddedWallet(), {
          factoryAddress: ACCOUNT_FACTORY_ADDRESS,
          gasless: true,
        }),
			]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
