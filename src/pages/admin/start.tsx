import React, { useState } from 'react'
import AddCandidate from '../../components/admin/AddCandidate';
import { useContractHook } from '../../context/contract.context';
import AdminLayout from '../../layouts/AdminLayout'
import Button from '../../ui/Button'

function StartElection() {
    const contract = useContractHook();
    // const []
    const [time, setTime] = useState<string>();
    const startElection  = (e: any) => {
      e.preventDefault()
      contract?.electionStarted(parseInt(time as string))
    }
  return (
   <AdminLayout>
     <div className='bg-white min-w-[800px] min-h-[300px] px-12 flex items-center justify-center mx-auto rounded-md'>
        <form className="flex flex-col w-full" onSubmit={startElection}>
        <input type="text" className='admin-input w-full min-h-[40px] px-4 capitalize py-4 focus:outline-none' placeholder='enter time in minutes' onChange={(e)=> setTime(e.target.value)} required  />
        <Button name='START Election' className='bg-[#332456] text-white w-[200px] px-6 rounded-md mt-4 py-4'/>
        </form>
    </div>
   </AdminLayout>
  )
}

export default StartElection