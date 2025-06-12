import React, { useContext, useState } from 'react'

export default function HomePage() {

    const [count, setCount] = useState(0)
    // console.log(user, "user in home page");

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-3xl font-bold text-center'>Welcome to the Task Manager</h1>
            <p className='text-center mt-4'>You can manage your tasks here.</p>
            <div className='flex justify-center mt-8'>
            </div>
        </div>
    )
}
