import React from 'react'
import Image from 'next/image'

export const metadata = {
    title: "Authentication"
}
const AuthLayout = ({children}) => {
  return (
    <div className='wrapper w-screen h-screen bg-blue-300 flex items-center justify-center'>
        <div className='container text-white h-[85vh] w-[90%] bg-white rounded-2xl shadow-xl flex overflow-hidden'>
            <div className='flex-[1.1] flex items-center justify-center'>{children}</div>
            <div className='flex-[.9] flex items-center justify-center bg-blue-500'>
                <Image 
                    alt='Authentication'
                    src='/images/auth.png'
                    width={400}
                    height={480}
                    quality={100}
                    />
            </div>
        </div>
    </div>
  )
}

export default AuthLayout;
