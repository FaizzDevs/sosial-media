'use client'
import React from 'react'
import "@/app/globals.css"; //tailwindcss
import Box from './Box/Box';
import { sidebarRoutes } from '@/lib/sidebarRoutes';
import Link from 'next/link';
import { Typography } from 'antd';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';
import { useClerk } from '@clerk/nextjs';

const Sidebar = () => {
    const router = useRouter()
    const {signOut} = useClerk()
  return (
    <div className=''>
        <Box className=''>
            {
                sidebarRoutes().map((route, index) => (
                    <Link key={index} href={route.route}>
                        {/* icon */}
                        <Typography>
                            <Icon icon={route.icon} width={"20px"}/>
                        </Typography>

                        {/* name */}
                        <Typography>{route.name}</Typography>
                    </Link>
                ))
            }
            <Link href={""} onClick={() => {
                signOut(() => router.push("/sign-in"))
            }}>
                {/* icon  */}
                <Typography>
                    <Icon icon={"solar:logout-2-bold"} width={"20px"}/>
                </Typography>

                {/* name */}
                <Typography>Sign out</Typography>
            </Link>
        </Box>
    </div>
  )
}

export default Sidebar