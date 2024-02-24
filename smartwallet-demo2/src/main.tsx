import { ScrollSepoliaTestnet } from "@thirdweb-dev/chains";
import {
  ThirdwebProvider,
  embeddedWallet,
  smartWallet
} from "@thirdweb-dev/react";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/globals.css";

export const activeChain = ScrollSepoliaTestnet;

export const smartWalletConfig = smartWallet(embeddedWallet({
  auth: {
    options: ['email', 'google', 'apple']
  }
}), {
  factoryAddress: "0x73985D4E6f8Cc92A338EE9E6a13BE607680Cac5D",
  gasless: true,
});

export const editionDropAddress = "";
export const editionDropTokenId = "0";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      clientId={import.meta.env.VITE_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
      supportedWallets={[smartWalletConfig]}
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
