/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useContractHook } from '../context/contract.context'
import { shortner } from '../utility/account-shortner';

const  WalletConnectModal:React.FC = () => {
    const contractHook = useContractHook();
   return (
    <div className='bg-gray-800 w-full flex flex-col absolute top-[50px] justify-center items-start'>
        <div className='border-b py-2 px-4 w-full cursor-pointer border-white'>
            <p className='text-[16px]  text-white hover:text-primary hover:font-bold font-popins'>{shortner(contractHook?.account)}</p>
        </div>
        <div className='py-2 px-4 w-full cursor-pointer border-white'>
            <p className='text-[16px] text-white hover:text-primary hover:font-bold font-popins'>Disconnect</p>
        </div>
    </div>
  )
}

export default WalletConnectModal