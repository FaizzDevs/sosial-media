"use client"

import { useSettingsContext } from "@/context/settings/settings-context"
import { ConfigProvider, theme } from "antd"
import { useCallback } from "react"

const ThemeProvider = ({children}) => {
    const {
        settings: { theme: globalTheme },
    } = useSettingsContext()

    const BoxBg = useCallback(() => {
        return globalTheme === "dark" ? "#212b36" : "white";
    }, [globalTheme])

    const BaseBg = useCallback(() => {
        return globalTheme === "dark" ? "black" : "#f4f6f8"
    }, [globalTheme])

    return (
        <ConfigProvider 
            theme={{
                algorithm:
                globalTheme === "light" 
                ? theme.defaultAlgorithm 
                : theme.darkAlgorithm,

                token: {
                    fontFamily: "inherit",
                    colorPrimary: "F9AA11",
                    boxBg: BoxBg(),
                    baseBg: BaseBg(),
                },
                components: {
                    Typography: {
                        fontSize: "none",
                        lineHeight: "none",
                        fontWeightStrong: "none",
                    }
                }
            }}
        >
            {children}
        </ConfigProvider>
    )
}

export default ThemeProvider;