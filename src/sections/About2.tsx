/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

type Props = {
    src:string;
    content: string;
}

function About2() {
  return (
    <section className='grid min-h-[400px] lg:max-w-[1400px] my-6 mx-auto h-full grid-cols-2'>
        <div className='grid-cols-1 h-full justify-center flex flex-col'>
            <h1 className='font-popins font-[500] text-[66px] text-white leading-[79px]'>
            Global Networking. <br/> Enjoy Voting.
            </h1>
            <p className='text-[20px] leading-[29px] text-gray-200  py-5 text-left font-popins'>
            We make sure our platform is very much comfortable for all our users. On DCV, you are exposed to a network of people with similar interest on <b className='block'>DCV Community.</b>
            </p>
           <p className='text-[20px] leading-[29px] text-gray-200  text-left font-popins'>Want to learn more about how vote processes are carried out? Kindly become a part of the community</p>
        </div>
        <div className='grid-cols-1'>
            <img src="assets/globe2.png" alt="award image" className='' />
        </div>
    </section>
  )
}

export default About2

 