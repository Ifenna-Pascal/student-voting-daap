import React from "react";
import { toast } from "react-toastify";

export const connectWallet = async (
  setAccount: React.Dispatch<React.SetStateAction<string>>
): Promise<undefined> => {
  try {
    const { ethereum } = window;
    if (!ethereum) {
      toast.error("Pls Install Metamask");
      return;
    }
    const accounts = (await ethereum.request({
      method: "eth_requestAccounts",
    })) as string[];
    setAccount(accounts[0]);
    toast.success("Account connected successfully");
  } catch (e: any) {
    toast.error(e.message);
  }
};

export const confirmWalletConnection = async (
  setAccount: React.Dispatch<React.SetStateAction<string>>
): Promise<undefined> => {
  try {
    const { ethereum } = window;
    if (!ethereum) {
      toast.error("Pls Install Metamask");
      return;
    }
    const accounts = (await ethereum.request({
      method: "eth_requestAccounts",
    })) as string[];
    if (accounts.length > 0) {
      setAccount(accounts[0]);
    }
  } catch (e: any) {
    toast.error(e.message);
  }
};
