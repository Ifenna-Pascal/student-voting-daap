import React from 'react'
import { useContractHook } from '../context/contract.context'
import Button from '../ui/Button'
import { shortner } from '../utility/account-shortner';

function Hero() {
    const contractHook = useContractHook();
 
  return (
    <section className='flex items-center h-[calc(80vh-24px)]  justify-between'>
        <div className='basis-[50%] items-center  justify-center pl-[48px] flex-col'>
            <h1 className='text-secondary font-gothic text-[24px] pb-4 leading-[35px]'>WELCOME TO DECENTRALIZED VOTING</h1>
            <h1 className='font-popins text-white leading-[79px] pb-4 text-[66px] font-[500]'>Experience the future.  Time is now!</h1>
            <p className='text-white font-popins text-[20px] lg:w-[75%] leading-[32px]'>A platform that gives you access to a secure polling system. Developed using blockchain technology.</p>
            <div className='flex space-x-8 py-8'>
                <Button name={contractHook?.account ? shortner(contractHook?.account) : "Connect Wallet"} className='bg-secondary text-white font-popins font-semibold px-8 py-3 rounded-[30px] text-[18px] leading-[42px] text-center' onClick={contractHook?.walletConnect} />
                <Button name='Vote' className='bg-transparent text-secondary border-[3px] rounded-[30px] border-secondary ml-4 tracking-wider font-popins px-12 text-[18px] leading-[42px] text-center' />
            </div>
        </div>
        <div className='hero basis-[50%]'></div>
    </section>
    )
}

export default Hero