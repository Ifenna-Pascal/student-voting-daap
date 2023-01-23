/* eslint-disable @next/next/no-img-element */
import React from 'react'

type Props = {
    title: string;
    src?: string;
}

function GradientCard({title, src}: Props) {
  return (
    <div className='flex flex-col  items-center justify-center relative my-4  gradient'>
        <img src={src} alt="image" className='absolute right-[50%] w-[200px]  h-[200px] my-2 cursor-pointer duration-300 -top-[85px] -mr-[110px]'/>
        <p className='font-popins font-[600] text-[20px]  leading-[30px] text-center text-white'>{title}</p>
    </div>
  )
}

export default GradientCard