import React from 'react'
import HeartIcon from './icons/HeartIcon'
import NotificationIcon from './icons/NotificationIcon'
import SettingsIcon from './icons/SettingsIcon'

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
                    className="h-7 w-7 lg:h-11 lg:w-11 rounded-full border border-secondary-200/40 hidden items-center justify-center lg:flex"
                    key={tool.id}
                >
                    {tool.icon}
                </div>
            ))}
        </>
    )
}

export default Tools
