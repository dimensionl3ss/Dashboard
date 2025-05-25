import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-[#f5f4fb] text-black shadow-md">
            <div className="container flex items-center py-4 px-0">
                <div className="text-2xl font-bold ml-6">Kaafi Cool Dashboard</div>
                <nav className='ml-auto'>
                    <ul className="flex space-x-6 justify-end ml-auto mr-6">
                        <li>
                            <Link href="/" className="hover:text-black-200 transition-colors">Resource</Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:text-black-200 transition-colors">Help</Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:text-black-200 transition-colors">Contacts</Link>
                        </li>
                        <li>
                            <Link href="/login"  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    );
};

export default Header;