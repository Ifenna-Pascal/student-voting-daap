import { MetaMaskInpageProvider } from "@metamask/providers";
import React from "react";
declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}
export type Props = {
  children: React.ReactNode;
};

export interface contractProps {
  //   connectWallet: (
  //     setAccount: React.Dispatch<React.SetStateAction<string>>
  //   ) => Promise<undefined>;
  walletConnect?: () => void;
  account?: string;
}
