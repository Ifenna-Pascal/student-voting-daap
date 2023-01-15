import React, { useEffect } from 'react'
import { useContractHook } from '../context/contract.context'
import Mainlayout from '../layouts/mainlayout'
import Livescores from '../sections/Livescore'

function Livescore() {
    const contract = useContractHook()
    useEffect(() => {
        contract?.getAllCandidates();
    }, [])
  return (
   <Mainlayout>
     <section className='max-w-[1100px] mx-auto'>
    <Livescores post='president' />
      <Livescores post='vice president' />
      <Livescores post='DOS' />

    </section>
   </Mainlayout>
  )
}

export default Livescore