'use client';
// This is a client component
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className='flex flex-col sm:flex-row justify-between sm:items-center items-start bg-gray-800 text-white ml-auto sm:ml-0 p-4 shadow-md sm:space-y-0 space-y-3'>
            <div className="flex items-center space-x-2 sm:space-x-4">
                <div className="text-xl sm:text-xl font-bold ">
                    <Link href="/">Logo</Link>
                </div>
                <div className="text-lg sm:text-2xl font-bold">
                    My Dashboard
                </div>
            </div>
            <input
                    type="text"
                    className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 sm:mt-0"
                    placeholder='Search......'
                />
            <ul className='flex flex-col sm:flex-row sm:space-y-0 space-y-3 items-start sm:items-center justify-between  space-x-0 md:space-x-6 sm:space-x-2 p-0 sm:p-3'>
                    <li className=''>
                        <Link href="/">Home</Link>
                    </li>
                    <li className=''>
                        <Link href="/about">About</Link>
                    </li>
                    <li className=''>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li className=''>
                        <Link href="/dashboard">Login</Link>
                    </li>
                </ul>

        </header>
    );
};

export default Header;