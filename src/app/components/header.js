'use client';
// This is a client component
import React, { useState } from 'react';
import Link from 'next/link';


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
                    <button class="rounded-md bg-gray-950/5 px-2.5 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-950/10">Open dialog</button>

                    <div class="relative z-10" aria-labelledby="dialog-title" role="dialog" aria-modal="true">
                        {/* <!--
                        Background backdrop, show/hide based on dialog state.

                        Entering: "ease-out duration-300"
                        From: "opacity-0"
                        To: "opacity-100"
                        Leaving: "ease-in duration-200"
                        From: "opacity-100"
                        To: "opacity-0"
    --> */}
                        <div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

                        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                {/* <!--
                                Dialog panel, show/hide based on dialog state.

                                Entering: "ease-out duration-300"
                                From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                To: "opacity-100 translate-y-0 sm:scale-100"
                                Leaving: "ease-in duration-200"
                                From: "opacity-100 translate-y-0 sm:scale-100"
                                To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        --> */}
                                <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <div class="sm:flex sm:items-start">
                                            <div class="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                                                <svg class="size-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                                </svg>
                                            </div>
                                            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                <h3 class="text-base font-semibold text-gray-900" id="dialog-title">Deactivate account</h3>
                                                <div class="mt-2">
                                                    <p class="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto">Deactivate</button>
                                        <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                                    </div>
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
                    <Link href="/">Logo</Link>
                </div>
                <div className="text-lg sm:text-2xl font-bold sm:text-left">
                    Dashboard
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
                <button className='px-4 py-2 cursor-pointer rounded ring-1 hover:ring-2' onClick={() => alert("Login Button Clicked!")}>Login</button>

            </ul>
        </header>
    );
};

export default Header;