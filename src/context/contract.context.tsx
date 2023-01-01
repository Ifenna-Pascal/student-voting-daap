import React, { createContext, useContext, useState } from "react";
import {  contractProps, Props } from "./interface";
import { connectWallet } from "./methods";

// export conntext
export const ContractContext = createContext<contractProps | null>(null);

export const ContractProvider = ({ children }: Props) => {
  const [account, setAccount] = useState<string>('');
  
  const walletConnect = () => {
    connectWallet(setAccount);
  }

  return (
    <ContractContext.Provider value={{walletConnect, account}}>
      {children}
    </ContractContext.Provider>
  )
}

export const useContractHook = () => {
  return useContext(ContractContext);
}