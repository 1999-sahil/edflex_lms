'use client'

import React, { useState } from 'react'

const CategoryFilter = ({ selectedCategory }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const filterOptions = [
        {
            id: 1,
            name: 'All',
            value: 'all'
        },
        {
            id: 2,
            name: 'Java',
            value: 'java'
        },
        {
            id: 3,
            name: 'Typescript',
            value: 'typescript'
        },
        {
            id: 4,
            name: 'Data Structures',
            value: 'data'
        },
        {
            id: 5,
            name: 'Algorithms',
            value: 'algo'
        },
        {
            id: 6,
            name: 'Frontend',
            value: 'frontend'
        },
        {
            id: 7,
            name: 'Database',
            value: 'database'
        },
        {
            id: 8,
            name: 'Javascript',
            value: 'javascript'
        },
    ];

    return (
        <div className='flex gap-5'>
            {filterOptions.map((item, index) => (
                <button
                    className={`border p-2 px-4 text-sm rounded-md hover:border-emerald-700 font-semibold font-mukta hover:bg-gray-100
                        ${activeIndex === index ? 'border-emerald-700 bg-emerald-50 text-emerald-800' : null}`
                    }
                    onClick={() => {
                        setActiveIndex(index)
                        selectedCategory(item.value)
                    }}
                    key={index}
                >
                    <h2>{item.name}</h2>
                </button>
            ))}
        </div>
    )
}

export default CategoryFilter