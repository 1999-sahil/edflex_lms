import Image from 'next/image';
import React from 'react'

const OptionSection = () => {

    const optionsList = [
        {
            id: 1,
            name: 'Github',
            icon: '/github.png'
        },
        {
            id: 2,
            name: 'Youtube',
            icon: '/youtube.png'
        },
        {
            id: 3,
            name: 'Demo',
            icon: '/demo.png'
        },
    ];

    return (
        <div className='flex items-center gap-3'>
            {optionsList.map((option, index) => (
                <div 
                    key={index}
                    className='p-2 border rounded-lg flex flex-col items-center w-full cursor-pointer'
                >
                    <Image
                        src={option.icon}
                        alt={option.name}
                        width={30}
                        height={30} 
                    />
                    <h2 className='text-[14px] text-gray-500'>{option.name}</h2>
                </div>
            ))}
        </div>
    )
}

export default OptionSection