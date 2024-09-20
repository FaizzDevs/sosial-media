import { useSettingsContext } from '@/context/settings/settings-context'
import { Icon } from '@iconify/react'
import { Button, theme } from 'antd'
import React from 'react'

const ModeButton = () => {
  const {setSettings} = useSettingsContext()
    return (
    <Button 
      style={{padding: 0, border: 'none'}}
        onClick={() => {
            setSettings((prev) => ({
                ...prev,
                theme: prev.theme === "dark" ? "light" : "dark",
            }));
        }}
        icon={<Icon icon={"icon-park-solid:dark-mode"} width={"30px"} />}
    />
  )
}

export default ModeButton
