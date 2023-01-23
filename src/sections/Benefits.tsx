import React from 'react'
import GradientCard from '../ui/GradientCard'

function Benefits() {
  return (
    <section className='max-w-[1100px] py-6 mx-auto'>
        <h1 className='font-popins font-[500] text-[40px] text-white leading-[50px] text-center'>Your Decision in Safe Hands </h1>
        <p className='text-[16px] leading-[29px] text-gray-200 max-w-[700px] py-2 mx-auto text-center font-popins'>Highly focused on cutting-edge technologies, our platform is providing a suitable and safe ground for digital vote.</p>
        <div className='grid py-8 grid-cols-3 gap-12'>
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