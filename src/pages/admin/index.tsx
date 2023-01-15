import React, { useState } from 'react'
import AddCandidate from '../../components/admin/AddCandidate'
import Sidebar from '../../components/admin/Sidebar';
import { useContractHook } from '../../context/contract.context';
import AdminLayout from '../../layouts/AdminLayout';
import Button from '../../ui/Button'

function Admin() {

  return (
     <AdminLayout>
           <AddCandidate />
    {/* <form onSubmit={startElection}> */}
      {/* <input type="string" className='input' onChange={(e)=>setTime(e.target.value) } required/>
    <Button name='START' className='bg-green-400 w-[400px] p-6'/>

    </form> */}
     </AdminLayout>
 
  )
}

export default Admin