import React from 'react'
import SideBar from '../../../components/common/SideBar/SideBar'
import TopBar from '../../../components/common/TopBar/TopBar'
import GuestTable from '../../../components/GuestTable/GuestTable'

export default function GuestManagement() {
  return (
    <div className="flex min-h-screen bg-[#FDFDFF]">
      <SideBar />
      <div className="flex-1 flex flex-col ml-[70px]">
        <TopBar />
        <main className="p-8">
          <GuestTable />
        </main>
      </div>
    </div>
  )
}
