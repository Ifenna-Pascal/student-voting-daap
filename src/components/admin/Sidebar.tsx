import Link from 'next/link'
import React from 'react'
import HomeLink from '../links/HomeLink'

function Sidebar() {
  return (
    <div className='bg-[#332456] h-screen fixed w-[230px] items-center py-6 flex flex-col'>
         <HomeLink text="text-[20px] py-4"/>
         <div className='flex flex-col mt-16'>
            <SideLink name="Add Candidate" href="/admin/add" />
            <SideLink name="Election Start" href="/admin/start" />
            {/* <SideLink name="Profile" href="/admin/profile" /> */}
         </div>
    </div>
  )
}

export default Sidebar

function SideLink ({name, href}: {name: string, href: string}){
    return (
        <Link href={href}> <p className='text-gray-300 py-4 capitalize font-popins text-[18px]'>{name}</p> </Link>
    )
}