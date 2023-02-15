import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { formProps } from '../../components/admin/AddCandidate';
import Photoupload from '../../components/hooks/Photoupload'
import { useContractHook } from '../../context/contract.context';
import AdminLayout from '../../layouts/AdminLayout'
import Button from '../../ui/Button'

export type formPropss = {
  name?: string;
  details: string;
  post: string;
  imageUrl: string;
}

function Add() {
 
      
      const initialState = {
        name: '',
        details: '',
        post: '',
        imageUrl: '',
      }
    const [form, setForm] = useState<formPropss>(initialState);
    
    const contract = useContractHook();
    const handleChange = (e: any) => {
      setForm({...form, [e.target.name]: e.target.value })  
    }
  
    const handleSubmit = async(e: any) => {
      e.preventDefault()
      if(!contract?.state?.ipfs) return toast.error('image is required')
      form['imageUrl'] = contract?.state?.ipfs as string
      console.log(form, "formmmm")
      contract?.setCandidate(form);
      contract?.getAllCandidates();
    }
  return (
   <AdminLayout>
     <div className='bg-white w-full max-w-[800px] min-h-[400px] px-6 py-6 flex items-center justify-center mx-auto rounded-md'>

    <form className='flex w-full flex-col' onSubmit={handleSubmit}>
        <Photoupload />
    <input onChange={handleChange} type="text" name="name" value={form.name}  className='admin-input my-2 w-full min-h-[40px] px-4 capitalize py-4 focus:outline-none' placeholder='Enter full name'   required  />
    <select className='admin-input my-2 w-full min-h-[40px] text-gray-500 px-4 capitalize py-4 focus:outline-none' value={form.post} name='post' onChange={handleChange}>
        <option className='text-popins text-[18px] text-gray-500' value="president">Departmental President</option>
        <option value="vice president" className='text-popins text-[18px] text-gray-500'>Departmental Vice President</option>
        <option className='text-popins text-[18px] text-gray-500' value="secretary">Financial Secretary</option>
        <option className='text-popins text-[18px] text-gray-500' value="treasurer">Treasurer</option>
        <option className='text-popins text-[18px] text-gray-500' value="DOS">Director of Socials</option>

    </select>
    <textarea value={form.details} name="details" id="" placeholder='Enter Description' className='admin-input mt-2 w-full min-h-[40px] text-gray-500 px-4 capitalize py-4 focus:outline-none' onChange={handleChange}></textarea>
    <Button name='Add Candidate' className='bg-[#332456] text-white w-[200px] px-6 rounded-md mt-4 py-4'/>
    
    </form>

    </div>
   </AdminLayout>
  )
}

export default Add