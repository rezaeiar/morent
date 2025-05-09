import React from 'react'
import HeartIcon from './HeartIcon'
import NotificationIcon from './NotificationIcon'
import SettingsIcon from './SettingsIcon'

const Tools = () => {

    const toolList = [
        {
            id: 1,
            icon: <HeartIcon />
        },
        {
            id: 2,
            icon: <NotificationIcon />
        },
        {
            id: 3,
            icon: <SettingsIcon />
        },
    ]
    return (
        <>
            {toolList.map(tool => (
                <div
                    className="h-11 w-11 rounded-full border border-secondary-200/40 flex items-center justify-center"
                    key={tool.id}
                >
                    {tool.icon}
                </div>
            ))}
        </>
    )
}

export default Tools
