import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import { formProps } from "../components/admin/AddCandidate";
import { contractReducer } from "../reducer/contract";
import { contractProps, Props, reducerProps } from "./interface";
import { addCandidate, allCandidates, confirmWalletConnection, connectWallet, getCandidate, setDetails, startElection, vote } from "./methods";

// export conntext
export const ContractContext = createContext<contractProps | null>(null);
export const initialState:reducerProps = {
  ipfs: '',
  isAdded: false,
  candidates: null,
  deadline: 0,
  isElectionStarted: false,
  elapsed: false,
  startTime: 0,
  candidate:null
}

export const ContractProvider = ({ children }: Props) => {
  const [account, setAccount] = useState<string>('');
  const [state, dispatch] = useReducer(contractReducer, initialState);

  const setElectionsDetails = async() => {
    const details = await setDetails();
    console.log(details, "details")
    dispatch({
      type: 'SET_DETAILS',
      payload: details
    })
  }
  
  useEffect(() => {
    confirmWalletConnection(setAccount);
  }, [account]) 

  useEffect(()=> {
    setElectionsDetails();
  },[])

  // coonect to wallet
  const walletConnect = () => {
    connectWallet(setAccount);
  }

  // set candidate 
 const setCandidate = async (form:formProps) => {
      await addCandidate(form);
      dispatch({
        type: 'ADD_CANDIDATE',
        payload: undefined
      })
  }
  // retrieve all candidates
  const getAllCandidates = async () => {
      const candidates = await allCandidates();
      console.log(candidates, "candidates");
      
      dispatch({
        type: 'SET_CANDIDATES',
        payload: candidates
      })
  }

  const electionStarted = async (time_in_minutes: number) => {
    await startElection(time_in_minutes)
    dispatch({
      type: 'START_ELECTION',
      payload: undefined
    })
  }

  const setIPFS = async (ipfsHash: string) => {
    dispatch({
      type: "SET_IPFS",
      payload: ipfsHash,
  })
  }

  const candidateDetails = async (id:number) => {
    const candidate = await getCandidate(id);
    dispatch({
      type: "SET_CANDIDATE",
      payload: candidate
    })
  }

  return (
    <ContractContext.Provider value={{walletConnect, account, state, setCandidate, getAllCandidates, electionStarted, setIPFS, vote, candidateDetails }}>
      {children}
    </ContractContext.Provider>
  )
}

export const useContractHook = () => {
  return useContext(ContractContext);
}