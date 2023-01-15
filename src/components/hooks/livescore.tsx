import React from 'react'
import { useContractHook } from '../../context/contract.context'
import { Candidate } from '../../context/interface';

type Props = {
    post: string;
    candidates: Candidate[] | null |  undefined;
}


function useLivescore({post, candidates}:Props) {
    // console.log(candidates, "canddid");
    
    const result =  candidates?.filter(candidate => candidate.post === post ).sort((a:any,b:any) => (a.voteCount   > b.voteCount) ? -1 :  (a.voteCount < b.voteCount) ? 1 : 0 );
    console.log(result, "mmmmm");
    
  return  {result}
}

export default useLivescore