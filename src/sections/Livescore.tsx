/* eslint-disable @next/next/no-img-element */
import React from 'react'
import useLivescore from '../components/hooks/livescore'
import { useContractHook } from '../context/contract.context'
import { Candidate } from '../context/interface'

type Props = {
    post: string
}

function Livescores({post}:Props) {
    const contract = useContractHook();
    console.log(contract?.state?.candidates, "cccc");
    
    const {result} = useLivescore({post:post, candidates: contract?.state?.candidates});
    console.log(result, "resultss");
  return (
  <section className='max-w-[1100px] mb-10 mx-auto'>
      <h1 className='font-popins font-semibold mb-4 text-white text-[18px]  uppercase '>POSITION:- {post}</h1>

      <table className="min-w-full border  text-center">
        <thead className="border">
            <tr>
            <th scope="col" className="text-sm font-medium text-gray-200 px-6 py-4 border-r">S/N</th>
            <th scope="col" className="text-sm font-medium text-gray-200 px-6 py-4 border-r">Image</th>
            <th scope="col" className="text-sm font-medium text-gray-200 px-6 py-4 border-r">Name</th>
            <th scope="col" className="text-sm font-medium text-gray-200 px-6 py-4 border-r">Vote count</th>
            </tr>
        </thead>
        <tbody>
            {
                result?.map((candidate, i) =>{                    
                  return ( 
                    
                    <tr key={i} className="border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200 border-r">{i+1}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex items-center justify-center text-gray-200 border-r"><img src={`https://ipfs.io/ipfs/${candidate.imageUrl}`} className="w-[50px] h-[50px] rounded-md"  alt="image" /></td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200 border-r">{candidate.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200 border-r">{candidate.voteCount?.toString()}</td>
                    </tr>
                )
                  }
                )
            }
        </tbody>
    </table>
  </section>
  )
}

export default Livescores