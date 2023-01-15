import React, { useState } from 'react'
import { formProps } from '../../components/admin/AddCandidate';
import Photoupload from '../../components/hooks/Photoupload'
import { useContractHook } from '../../context/contract.context';
import AdminLayout from '../../layouts/AdminLayout'
import Button from '../../ui/Button'

function Add() {
    type formProps = {
        name?: string;
        details: string;
        post: string;
        imageUrl: string;
        fistname: string;
        lastname: string;
      }
      
      const initialState = {
        fistname: '',
        lastname: '',
        details: '',
        post: '',
        imageUrl: '',
      }
    const [form, setForm] = useState<formProps>(initialState);
    const contract = useContractHook();
    const handleChange = (e: any) => {
      setForm({...form, [e.target.name]: e.target.value })  
    }
  return (
   <AdminLayout>
     <div className='bg-white w-full max-w-[800px] min-h-[400px] px-6 py-6 flex items-center justify-center mx-auto rounded-md'>

    <form className='flex w-full flex-col'>
        <Photoupload />
    <input type="text" className='admin-input my-2 w-full min-h-[40px] px-4 capitalize py-4 focus:outline-none' placeholder='enter firstname'   required  />
    <input type="text" className='admin-input my-2 w-full min-h-[40px] px-4 capitalize py-4 focus:outline-none' placeholder='enter lastname' required  />
    <select className='admin-input my-2 w-full min-h-[40px] text-gray-500 px-4 capitalize py-4 focus:outline-none' placeholder='enter lastname'>
        <option className='text-popins text-[18px] text-gray-500' value="president">President</option>
        <option value="vice president" className='text-popins text-[18px] text-gray-500'>Vice President</option>
        <option className='text-popins text-[18px] text-gray-500' value="secretary">Secretary</option>
        <option className='text-popins text-[18px] text-gray-500' value="treasurer">Treasurer</option>
    </select>
    <textarea name="desc" id="" placeholder='Enter Description' className='admin-input mt-2 w-full min-h-[40px] text-gray-500 px-4 capitalize py-4 focus:outline-none'>Enter Desciption</textarea>
    <Button name='Add Candidate' className='bg-[#332456] text-white w-[200px] px-6 rounded-md mt-4 py-4'/>
    
    </form>

    </div>
   </AdminLayout>
  )
}

export default Add