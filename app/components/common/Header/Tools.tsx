import React from 'react'
import { Icon } from '@iconify/react'

const Tools = () => {

    const toolList = [
        {
            id: 1,
            icon: <Icon icon="mdi:heart" height={24} width={20} />,
        },
        {
            id: 2,
            icon: <Icon icon="mdi:bell-outline" height={24} width={20} />,
        },
        {
            id: 3,
            icon: <Icon icon="mdi:cog-outline" height={24} width={20} />,
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
