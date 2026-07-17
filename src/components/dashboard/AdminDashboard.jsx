
import React from 'react'
import Header from '../others/Header'
import CreateTasklist from '../others/CreateTasklist'
import AllTask from '../others/AllTask'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
      <Header />
      <CreateTasklist />
      <AllTask/>
    </div>
  )
}

export default AdminDashboard