/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import useCounter from '../../components/hooks/timeCounter';
import { useContractHook } from '../../context/contract.context';
import Mainlayout from '../../layouts/mainlayout';

function Candidate() {
    const router = useRouter();
    const contract = useContractHook();
    const param = parseInt(router.query?.id as string)
    const [ hours, mins, secs, display] = useCounter()   
    console.log(hours, mins, secs, display, "res");
     

    const handleVote = ()=> {
        contract?.vote(param);
    }
    useEffect(() => {
        contract?.candidateDetails(param);
    }, [param])
  return (
    <Mainlayout>
       <div className='max-w-[1100px] mx-auto w-full min-h-[300px] my-8 bg-white p-6 rounded-md'>
       <div className='flex items-start justify-between'>
       <div className='flex items-center justify-center'>
        <div className='w-[232px] h-[227px]'>
        <img src={`https://ipfs.io/ipfs/${contract?.state?.candidate?.imageUrl}`} className='w-full rounded-md h-full object-fit' />
        </div>
        <div className='flex flex-col ml-6'>
        <h1 className='font-popins font-[500] capitalize text-[40px] leading-[40px]'>{contract?.state?.candidate?.name}</h1>
        <p className='text-gray-600 text-[28px] capitalize py-2 font-popins'>{contract?.state?.candidate?.post}</p>
        </div>
        </div>
        <button className='border-2 border-primary text-[24px] px-8 py-2 tracking-wider font-[500] relative rounded-md'><p className=''>{display ? `${hours}:${mins}:${secs}`: "Election Ended"}</p></button>
       </div>
       <p className='text-[18px] font-popins tracking-wider text-gray-700 py-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptatum sint consequatur voluptates mollitia veniam delectus neque sit quae quibusdam numquam, rerum asperiores atque, consectetur vero nihil minima dolores totam!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident alias illum incidunt cumque fugit assumenda nam voluptates. Cum necessitatibus debitis nostrum autem consequuntur cumque incidunt? Laborum, recusandae neque? Repellendus, ipsum.
       </p>
       <button className='bg-primary text-white font-popins px-12 py-3  text-[20px] tracking-wider hover:bg-secondary duration-500' onClick={handleVote}>Vote</button>
    </div>
    </Mainlayout>
  )
}

export default Candidate