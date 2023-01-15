/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link';
import React from 'react'
import Button from '../../ui/Button';

type Props = {
    id: number | undefined;
    img:string;
    name:string;
    desc: string;
    position:string;
    
}

function Post({id, img, name, desc, position}: Props) {
  return ( 
    <div className='shadow-lg relative h-[180px] w-full px-6 py-4 rounded-md flex items-center bg-white px-4 mb-4'>
           <div className='flex items-center'>
           <div className='max-w-[180px] h-[120px] post'>   
                <img src={`https://ipfs.io/ipfs/${img}`} className='w-full rounded-md h-full object-fit' />
            </div>
            <div className='flex flex-col ml-5 max-w-[500px] w-full'>
                <p className='block font-popins capitalize leading-[22px] text-[18px] font-[500]'>{name}</p>
                <p className='font-popins capitalize py-2 text-gray-500  '>
                    {desc} Lorem ipsum dolor sit amet consectetur adipisicing 
                </p>
                <p className='block font-popins capitalize leading-[22px] text-[15px] font-[500]'>Post</p>
                <p className='font-popins text-gray-500  '>
                    {position}
                </p>
            </div>
           </div>
        
           <div className='absolute top-0 right-0'>
                <Link href={`/candidate/${id}`}>
                <button className='bg-primary text-white font-popins px-8 py-2 rounded-bl-lg text-[18px] tracking-wider hover:bg-secondary duration-500'>vote</button>
                </Link>
           </div>
    </div>
  )
}

export default Post