import React from 'react'

type Props = {
    title: string;
    content: string;
    color: string;
}

function Card({title, content, color}: Props) {
  return (
    <div className='flex flex-col border-[0.5px] card-gradient rounded-[20px] w-[369px] h-[224px] border-b-0 rounded-b-none items-center justify-center'>
        <p className={`${color} text-[24px] capitalize leading-[36px] font-popins text-center`}>{title}</p>
        <h1 className='font-popins leading-[72px] text-center text-[#FDFDFD] text-[48px] font-[300]'>{content}</h1>
    </div>
  )
}

export default Card