/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Button from '../ui/Button'

function Subscriptions() {
  return (
    <div className='max-w-[1400px]  mx-auto flex items-center rounded-[30px] justify-between my-12 p-4 sub h-[200px]'>
        <div className='flex flex-col ml-8 justify-center'>
            <h1 className='font-popins font-[600] text-white text-[24px] leading-[36px]'>Don't miss any Update</h1>
            <p className='font-popins font-[300] text-[18px] py-2 text-[#D2D2D2] leading-[21px]'>subscribe to always know about the latest feature</p>
            <div className='flex py-3'>
                <input className='input flex items-center text-[#DADADA] font-popins outline-none' placeholder='enter your email address' />
                <Button  name='subscirbe' className='text-center mx-4 rounded-[10px] px-6 text-white font-popins py-2 sub2'/>
            </div>
        </div>

        <div className='flex flex-col items-center justify-center w-[485px] h-[250px]'>
            <img src="assets/nft.png" alt="image_nft" className='w-full h-full' />
        </div>
    </div>
  )
}

export default Subscriptions