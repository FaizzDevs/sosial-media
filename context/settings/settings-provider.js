"use client";
import { useState } from "react";
import { SettingsContext } from "./settings-context";
import { theme } from "antd";
import { isClientSide } from "@ant-design/cssinjs/lib/util";

export const SettingsContextProvider = ({ children }) => {
    const [settings, setSettings] = useState({
        theme: 'light', // background halaman dark = gelap, light = terang
        isSidebarOpen: false,
    });

    return (
        <SettingsContext.Provider value={{settings, setSettings}}>
            {children}
        </SettingsContext.Provider>
    )
}