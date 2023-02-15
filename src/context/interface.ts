import { MetaMaskInpageProvider } from "@metamask/providers";
import React, { Dispatch, SetStateAction } from "react";
import { formProps } from "../components/admin/AddCandidate";
import { formPropss } from "../pages/admin/add";
declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}
export type Props = {
  children: React.ReactNode;
};

export interface contractProps {
  walletConnect?: () => void;
  account?: string;
  state: reducerProps;
  setAccount: Dispatch<SetStateAction<string | null>>;
  setCandidate: (form: any) => void;
  getAllCandidates: () => void;
  electionStarted: (time_in_minutes: number) => void;
  setIPFS: (ipfs: string) => void;
  vote: (_id: number) => void;
  candidateDetails: (_id: number) => void;
}

export interface reducerProps {
  ipfs: string;
  isAdded: boolean;
  candidates: Candidate[] | null;
  deadline: number;
  isElectionStarted: boolean;
  startTime: number;
  elapsed: false;
  candidate: Candidate | null;
}

export type AsyncSendable = {
  isMetaMask?: boolean;
  host?: string;
  path?: string;
  sendAsync?: (
    request: any,
    callback: (error: any, response: any) => void
  ) => void;
  send?: (request: any, callback: (error: any, response: any) => void) => void;
};

export interface Candidate {
  id?: number;
  post: string;
  name: string;
  imageUrl: string;
  details: string;
  voteCount?: number;
}

export interface ElectionDetails {
  startTime: number;
  deadline: number;
  isElectionStarted: boolean;
  elapsed: boolean;
}
