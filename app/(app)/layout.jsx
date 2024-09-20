import Box from '@/components/Box/Box';
import Header from '@/components/Header';
import { SettingsContextProvider } from '@/context/settings/settings-provider'
import ThemeProvider from '@/lib/ThemeProvider';
import "@/app/globals.css"; //tailwindcss
import css from '@/styles/homeLayout.module.css';
import React from 'react'
import Sidebar from '@/components/Sidebar';

const HomeLayout = ({children}) => {
  return (
    <SettingsContextProvider>
      <ThemeProvider>
        <Box type="baseBg" style={{
          position: "relative",
          width: "100vw",
          height: "100vh"
        }}>
          <div className=''>
            {/* { header } */}
            <Header />

            <div className=''>
              <Sidebar />
            </div>
          </div>
        </Box>
      </ThemeProvider>
    </SettingsContextProvider>
  );
};

export default HomeLayout
