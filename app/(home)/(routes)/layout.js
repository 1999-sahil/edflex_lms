import React from 'react'
import SidebarNav from '../_components/SidebarNav'
import Header from '../_components/Header'

function HomeLayout({ children }) {
  return (
    <div>
      <div className='h-full w-64 flex flex-col fixed inset-y-0 z-50'>
        <SidebarNav />
      </div>
      <div>
        <Header />
      </div>
      <div className='md:ml-64 ml-0 p-4'>
        {children}
      </div>
    </div>
  )
}

export default HomeLayout