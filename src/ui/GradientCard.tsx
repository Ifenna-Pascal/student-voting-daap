/* eslint-disable @next/next/no-img-element */
import React from 'react'

type Props = {
    title: string;
    src?: string;
}

function GradientCard({title, src}: Props) {
  return (
    <div className='flex flex-col m-6 items-center justify-center relatived gradient'>
        <img src={src} alt="image" className='absolute right-[50%] w-[220px]  h-[220px] hover:-top-[30px] cursor-pointer duration-300 -top-[85px] -mr-[110px]'/>
        <p className='font-popins font-[600] text-[20px]  leading-[30px] text-center text-white'>{title}</p>
    </div>
  )
}

export default GradientCard