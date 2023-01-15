import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useContractHook } from '../../context/contract.context';
import { addCandidate } from '../../context/methods';
import Button from '../../ui/Button';
import Photoupload from '../hooks/Photoupload'

export type formProps = {
  name: string;
  details: string;
  post: string;
  imageUrl: string ;
}

const initialState = {
  name: '',
  details: '',
  post: '',
  imageUrl: '',
}

function AddCandidate() {
  const [form, setForm] = useState<formProps>(initialState);
  const contract = useContractHook();
  const handleChange = (e: any) => {
    setForm({...form, [e.target.name]: e.target.value })  
  }

  const handleSubmit = async(e: any) => {
    e.preventDefault()
    if(!contract?.state?.ipfs) return toast.error('image is required')
    form['imageUrl'] = contract?.state?.ipfs as string
    contract?.setCandidate(form);
    contract?.getAllCandidates();
  }
  return (
    <div className='flex flex-col'>
      <form onSubmit={handleSubmit} className="flex flex-col">
      <Photoupload />
      <input type="text" className='input' name="post" onChange={handleChange}  />
      <input type="text" className='input' name='name' onChange={handleChange}/>
      <textarea name="details" id="" className='input'  cols={20} rows={10} onChange={handleChange}></textarea>
      <Button name='Suibmit' className='bg-blue-500 max-w-[200px] mx-auto' />
      </form>
    </div>
  )
}

export default AddCandidate