"use client"
import React from 'react'
import css from "@/styles/header.module.css"
import "@/app/globals.css"; //tailwindcss
import Box from './Box/Box'
import Image from 'next/image';
import { Flex } from 'antd';
import ModeButton from './ModeButton';
import { UserButton } from '@clerk/nextjs';

const Header = () => {
  return (
    <div className="fixed top-0 w-full shadow-xl h-[72px] overflow-hidden z-[999]">
      <Box style={{height: "100%"}}>
        <div className='flex items-center justify-between py-4 px-8'>
            {/* { logo left-side } */}
            <Image 
              src={"/images/logo.png"}
              width={130}
              height={20}
              alt="logo"
              className=''
            />

            <Flex gap={25} align="center">
              {/* mode button */}
              <ModeButton />
              {/* user button */}
              <UserButton afterSignOutUrl='/sign-in' />
            </Flex>
        </div>
      </Box>
    </div>
  )
}

export default Header
