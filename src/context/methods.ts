import { MetaMaskInpageProvider } from "@metamask/providers";
import { ethers } from "ethers";
import React from "react";
import { toast } from "react-toastify";
import { token } from ".";
import { AsyncSendable, Candidate, ElectionDetails } from "./interface";

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
    console.log("connection error");
    // toast.error(e.message);
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
    console.log(e);
    // toast.error(e.message);
  }
};

export const contractInstance = async () => {
  const { ethereum } = window;
  const provider = await new ethers.providers.Web3Provider(
    ethereum as AsyncSendable
  );
  const signer = await provider.getSigner();
  const contract = await new ethers.Contract(token.address, token.abi, signer);
  console.log(contract, "contract");

  return contract;
};

export const addCandidate = async (data: Candidate) => {
  console.log(data);
  try {
    const contract = await contractInstance();
    await contract.callStatic.addCandidate(
      data.post,
      data.name,
      data.imageUrl,
      data.details
    );
    const res = await contract.addCandidate(
      data.post,
      data.name,
      data.imageUrl,
      data.details
    );
    await res.wait();
    toast.success("Candidate added successfully");
  } catch (err: any) {
    if (err && err?.data) {
      console.log(err?.data);
      const code = err.data?.replace("Reverted ", "");
      let reason = ethers.utils.toUtf8String("0x" + code.substr(138));
      toast.error(reason);
    } else {
      console.log(err);
      toast.error("user cancelled transaction");
    }
  }
};

export const allCandidates = async () => {
  try {
    const contract = await contractInstance();
    const res = await contract.retrievecandiadates();
    console.log(res, "resss");
    return res;
  } catch (err) {
    console.log(err, "errroror");
  }
};

// https://goerli.infura.io/v3/ef053c2c3ba3413eac34c7124010cad0

export const startElection = async (time_in_minutes: number) => {
  try {
    const contract = await contractInstance();
    await contract.callStatic.startElection(time_in_minutes);
    const res = await contract.startElection(time_in_minutes);
    await res.wait();
    toast.success("Election started successfully");
  } catch (err: any) {
    if (err && err?.data) {
      console.log(err?.data);
      const code = err.data?.replace("Reverted ", "");
      let reason = ethers.utils.toUtf8String("0x" + code.substr(138));
      toast.error(reason);
    } else {
      console.log(err);
      toast.error("user cancelled transaction");
    }
  }
};

export const setDetails = async () => {
  try {
    const contract = await contractInstance();
    const details = {} as ElectionDetails;
    details.startTime = await contract.startTime();
    details.deadline = await contract.deadline();
    details.isElectionStarted = await contract.isElectionStarted();
    details.elapsed = await contract.timing();
    return details;
  } catch (err: any) {
    console.log(err);
    // toast.error(err?.message);
  }
};

export const vote = async (_id: number) => {
  try {
    const contract = await contractInstance();
    await contract.callStatic.vote(_id);
    const res = await contract.vote(_id);
    await res.wait();
    toast.success("vote done successfully");
  } catch (err: any) {
    if (err && err?.data) {
      console.log(err?.data);
      const code = err.data?.replace("Reverted ", "");
      let reason = ethers.utils.toUtf8String("0x" + code.substr(138));
      toast.error(reason);
    } else {
      console.log(err);
      toast.error("user cancelled transaction");
    }
  }
};

export const getCandidate = async (id: number) => {
  try {
    const contract = await contractInstance();
    return await contract.candidates(id);
  } catch (error) {
    console.log(error);
    toast.error("error occured");
  }
};

export const votersByPost = async (post: string) => {
  try {
    const contract = await contractInstance();
    const res = await contract.votersByPost(post);
    await res.wait();
  } catch (err: any) {
    console.log(err);
    toast.error("user cancelled transaction");
  }
};
