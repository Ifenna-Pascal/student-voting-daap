/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

type Props = {
    src:string;
    content: string;
}

function About() {
  return (
    <section className='grid min-h-[400px] max-w-[1500px] mx-auto h-full grid-cols-2'>
        <div className='grid-cols-1 w-full h-full flex items-center justify-center'>
            <img src="assets/award.png" alt="award image" className='flex items-center w-[500px] h-[500px]  justify-center  object-fill' />
        </div>
        <div className='grid-cols-1 h-full justify-center -ml-8 flex flex-col'>
            <h1 className='font-popins font-[500] text-[40px] text-white leading-[50px]'>
            Decentralised Finance. <br/> Complete security.
            </h1>
            <p className='text-[16px] leading-[24px] mr-8 text-gray-200  py-3 text-left font-popins'>We consider the security of your funds and transations, a top priority. We hire top developers, whose sole purpose is to ensure utmost encryption on our platform.</p>
            <div className='grid grid-cols-2 py-6 gap-8'>
                <Listings src="assets/about4.png" content="Your votes are highly encrypted by the best technology ever built." />
                <Listings src="assets/about3.png" content="Built by renowned and seasoned Developers." />
                <Listings src="assets/about2.png" content="We are running a decentralised blockchain platform." />
                <Listings src="assets/about1.png" content="We constantly review the codes to checkmate bugs." />
            </div>
        </div>
    </section>
  )
}

export default About

const Listings = ({src, content}: Props) => (

    <div className='flex items-center mr-6'>
        <img src={src} className="w-[50px] object-fit mr-3 h-[50px]"/>
        <p className='text-[16px] font-popins leading-[20px] text-[#999999]'>{content}</p>
    </div>

)