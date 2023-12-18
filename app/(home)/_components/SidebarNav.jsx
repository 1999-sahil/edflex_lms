"use client";

import { LayoutDashboard, Mail, Search, Shield } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const SidebarNav = () => {

    const menuList = [
        {
            id: 1,
            name: 'Browse',
            icon: Search,
            path: '/browse'
        },
        {
            id: 2,
            name: 'Dashboard',
            icon: LayoutDashboard,
            path: '/dashboard'
        },
        {
            id: 3,
            name: 'Upgrade',
            icon: Shield,
            path: '/upgrade'
        },
        {
            id: 4,
            name: 'Newsletter',
            icon: Mail,
            path: '/newsletter'
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="h-full bg-white border-r md:flex hidden flex-col overflow-y-auto shadow-md">
            <div className="p-4 border-b flex gap-2 items-center justify-start">
                <Image src="/logo.png" alt="Logo" width={40} height={40} />
                <span className="text-lg font-bold font-mukta">
                    EdFlex Learning
                </span>
            </div>
            <div className="flex flex-col">
                {menuList.map((item, index) => (
                    <div 
                        className={`flex gap-2 items-center p-4 px-6 font-mukta font-medium text-gray-600 hover:bg-gray-100 cursor-pointer 
                            ${activeIndex === index ? 'bg-emerald-100 text-emerald-700' : null}`
                        } 
                        key={index}
                        onClick={() => setActiveIndex(index)}
                    >
                        <item.icon height={20} />
                        <h2>{item.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SidebarNav;
