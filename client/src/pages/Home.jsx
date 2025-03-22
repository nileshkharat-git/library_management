import React, {useState} from 'react'
import AdminLogin from '../components/AdminLogin'

const Home = () => {
  return (
    <main className='w-10/12 mx-auto'>
        <h1 className='text-2xl text-center'>Login</h1>
        <div>
            <AdminLogin />
        </div>
    </main>
  )
}

export default Home