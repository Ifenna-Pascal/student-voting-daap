import React from 'react'
import AdminNav from '../components/admin/AdminNav'
import Sidebar from '../components/admin/Sidebar'

function AdminLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='flex'>
        <Sidebar />
        <main className=' ml-[230px] bg-[#130534] min-h-[calc(100vh-40px)] w-full h-full'>
        <AdminNav />
        <div className='min-h-[90vh]  flex py-10 items-center flex-col justify-center'> {children}</div>
        </main>
    </div>
  )
}

export default AdminLayout