"use client"
import { createContext, useContext } from "react"

export const SettingsContext = createContext({})

export const useSettingsContext = () => {
    const context = useContext(SettingsContext)

    if(!context){
        throw new Error("Error pak !!!")
    }

    return context;
}