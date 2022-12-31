import React from 'react'
import GradientCard from '../ui/GradientCard'

function Benefits() {
  return (
    <section className='max-w-[1400px] py-10 mx-auto'>
        <h1 className='font-popins font-[500] text-[66px] text-white leading-[99px] text-center'>Your Decision in Safe Hands </h1>
        <p className='text-[20px] leading-[29px] text-gray-200 max-w-[900px] py-2 mx-auto text-center font-popins'>Highly focused on cutting-edge technologies, our platform is providing a suitable and safe ground for digital vote.</p>
        <div className='grid py-10 grid-cols-3 gap-8'>
            <GradientCard title="Reduce Cost"  src="../assets/gradient1.png"/>
            <GradientCard title="Seamless Processes" src="../assets/gradient2.png" />
            <GradientCard title="Best site on the market" src="../assets/gradient3.png"/>
            <GradientCard title="Statistic Vote" src="../assets/gradient4.png"/>
            <GradientCard title="In-app Messaging" src="../assets/gradient5.png" />
            <GradientCard title="Decentralised Technology" src="../assets/gradient6.png"/>
        </div>
    </section>
    )
}

export default Benefits