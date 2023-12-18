'use client'

import React from 'react'
import SearchBar from './SearchBar'
import { UserButton, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { LogInIcon } from 'lucide-react';

const Header = () => {

    const { user } = useUser();
    const router = useRouter();

    return (
        <div className='md:ml-64 ml-0 p-4 border-b flex items-center justify-between'>
            <SearchBar />
            {!user ? (
                <button
                    onClick={() => router.push('/sign-in')}
                    className='px-5 py-2 bg-purple-700 hover:bg-purple-800 rounded-md text-white font-mukta font-semibold text-base items-center gap-1 flex'
                >
                    Login
                    <LogInIcon height={18} />
                </button>
            ) : (
                <UserButton />
            )}
        </div>
    )
}

export default Header