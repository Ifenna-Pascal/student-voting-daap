import React from 'react'
import Card from '../ui/Card'

function Countings() {
  return (
    <section className='flex items-center h-[300px] my-6 lg:max-w-[1000px] mx-auto  justify-between'>
        <Card title="all tiime voting" content='24h' color='text-[#AD00FF]' />
        <Card title="total vote" content='11,333,244' color='text-[#FF9E44]' />
        <Card title="Positions Engaged" content='159' color='text-[#00AF9A]' />
    </section>
    )
}

export default Countings