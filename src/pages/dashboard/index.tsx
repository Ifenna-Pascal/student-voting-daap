import React, { useEffect } from 'react'
import Post from '../../components/dashboard/Post';
import { useContractHook } from '../../context/contract.context';
import { Candidate } from '../../context/interface';
import Mainlayout from '../../layouts/mainlayout';

function Dashboard() {
  const contract = useContractHook();
    useEffect(() => {
        contract?.getAllCandidates();
    }, [])
    // console.log(contract?.state?.deadline, contract?.state?.isElectionStarted, contract?.state?.startTime);
    
  return (
   <Mainlayout>
     <div className='flex flex-col  w-full px-16'>
      {/* <h1 className='font-popins font-semibold mb-8 text-white text-[26px] '>Candidates</h1> */}
      <Filter post="president" candidates={contract?.state?.candidates} />
      <Filter post="vice president" candidates={contract?.state?.candidates} />
    </div>
   </Mainlayout>
  )
}

export default Dashboard


const Filter = ({post, candidates}: {post:string, candidates:Candidate[] | null | undefined} ) => {
  return (
    <div className='my-6'>
      <h1 className='font-popins font-semibold mb-4 text-white text-[18px]  uppercase '>POSITION:- THE {post}</h1>
      <div className='grid gap-8 w-full grid-cols-2 '>
      {
        candidates?.filter(candidate => candidate.post === post ).map(candidate => <Post key={candidate.id} id={candidate.id} name={candidate.name} img={candidate.imageUrl} position={candidate.post} desc={candidate?.details}/>)
      }
      
    </div>
    </div>
  )
} 