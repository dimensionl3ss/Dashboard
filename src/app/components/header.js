'use client';
// This is a client component
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


// create a model that will open when the search input is clicked
const SearchModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <input
                type="text"
                className="w-full sm:w-64 px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-2 mt-2 sm:mt-0"
                placeholder='Search......'
                onClick={toggleModal}
            />
            {isOpen && (
                <div>
                    <div className="relative z-10" aria-labelledby="dialog-title" role="dialog" aria-modal="true">

                        <div className="fixed inset-0 bg-gray-100/80 bg-transition-opacity" aria-hidden="true"></div>
                        <div className="fixed inset-0 z-10 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <div className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                                    <div className='flex justify-between items-center p-4 md:p-5 border-b rounded-t dark:border-gray-400 border-gray-200'>
                                        <h3 className="text-lg font-semibold leading-6 text-gray-900" id="dialog-title">
                                            Search Planets, Moons, and Asteroids
                                        </h3>
                                        <button onClick={toggleModal} type="button" className="text-gray-400 cursor-pointer bg-transparent hover:hover:bg-[#030303] hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>

                                    <form className="p-4 md:p-5 space-y-4">
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-2"
                                            placeholder='Search for planets, moons, or asteroids...'
                                        />
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-2"
                                            placeholder='Search for planets, moons, or asteroids...'
                                        />
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-2"
                                            placeholder='Search for planets, moons, or asteroids...'
                                        />
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-2"
                                            placeholder='Search for planets, moons, or asteroids...'
                                        />
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-2"
                                            placeholder='Search for planets, moons, or asteroids...'
                                        />
                                        <button
                                            type="submit"
                                            className="w-full cursor-pointer px-4 py-2 bg-gray-600 text-white rounded hover:bg-[#030303] focus:outline-none focus:ring-2"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                alert("Search submitted!");
                                                toggleModal();
                                            }}
                                        >
                                            Search
                                        </button>
                                    </form>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
}


const Header = () => {
    return (
        <header className='bg-white flex flex-col sm:flex-row justify-between sm:items-center items-start text-black ml-auto sm:ml-0 p-3 sm:p-2 shadow-md sm:space-y-0 space-y-3'>
            <div className="flex flex:col sm:flex-row items-start sm:items-center space-x-2 sm:space-x-4">
                <div className="text-xl sm:text-xl font-bold">
                    <Image src="/logo.png" alt="Solar System" width={48} height={48} className="w-8 h-8 sm:w-12 sm:h-12 inline-block" />
                </div>
                <div className="text-lg sm:text-2xl font-bold sm:text-left">
                    Solar System Dashboard
                </div>
            </div>
            <SearchModal />
            <ul className='flex flex-col sm:flex-row sm:space-y-0 space-y-3 items-start sm:items-center justify-between  space-x-0 md:space-x-6 sm:space-x-2 p-0 sm:p-3'>
                <li className='transition-colors hover:underline'>
                    <Link href="/">Home</Link>
                </li>
                <li className='transition-colors hover:underline'>
                    <Link href="/about">About</Link>
                </li>
                <li className='transition-colors hover:underline'>
                    <Link href="/contact">Contact</Link>
                </li>
                <button className='px-4 py-2 cursor-pointer rounded ring-1 hover:ring-2 hover:text-white hover:bg-[#030303]' onClick={() => alert("Login Button Clicked!")}>Login</button>

            </ul>
        </header>
    );
};

export default Header;