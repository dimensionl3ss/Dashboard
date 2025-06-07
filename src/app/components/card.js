// Write a react componet that creates a card with a title, description and an image. The card should be responsive and have a hover effect that scales the image. The card should also have a button that links to a different page. Use tailwind css for styling.
'use client';

const Card = () => {
   return (
        <div>
            card
        </div>
   );
};

export default Card;



// 'use client';
// // This is a client component
// import React, { useState } from 'react';
// import Link from 'next/link';

// const Header = () => {
//     const [menuOpen, setMenuOpen] = useState(false);
//     return (
//         <header className="bg-[#f5f4fb] text-black shadow-md">

//             <div className="flex items-center py-4 px-2 space-x-2 sm:px-0 relative">

//                 <div className="text-xl sm:text-wxl font-bold ml-2 sm:ml-6">Application Reliabiltiy Dashboard</div>

//                 {/* Hamburger icon for mobile */}
//                 <button
//                     className="ml-auto sm:hidden p-2 focus:outline-none"
//                     onClick={() => setMenuOpen(!menuOpen)}
//                     aria-label="Toggle menu"
//                 >
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                     </svg>
//                 </button>
//                 {/* Navigation links */}

//                 {/* <nav className={`ml-auto ${menuOpen ? 'block' : 'hidden'} sm:block absolute sm:relative top-full left-0 w-full sm:w-auto bg-[#f5f4fb] sm:bg-transparent shadow-md sm:shadow-none z-10`}>
//                     <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 items-start sm:items-center justify-between'>
//                         <div className=''>
//                             <form className="flex items-center justify-center sm:justify-start p-4 sm:p-0">
//                                 <input
//                                     type="text"
//                                     placeholder="Search..."
//                                     className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 />
//                                 <button
//                                     type="submit"
//                                     className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
//                                 >
//                                     Search
//                                 </button>
//                             </form>
//                         </div>
//                         <div className=''>
//                             <ul className="flex flex-col sm:flex-row justify-end space-x-2 space-x-4 p-4 space-y-2">
//                                 <li>
//                                     <Link href="/" className="hover:text-blue-500 transition-colors">Resource</Link>
//                                 </li>
//                                 <li>
//                                     <Link href="/" className="hover:text-blue-500 transition-colors">Help</Link>
//                                 </li>
//                                 <li>
//                                     <Link href="/" className="hover:text-blue-500 transition-colors">Contacts</Link>
//                                 </li>
//                                 <li>
//                                     <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">Login</Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>

//                 </nav> */}

//                 <nav className={`ml-auto w-full sm:w-auto ${menuOpen ? 'block' : 'hidden'} sm:block space-y-1 sm:space-y-0 sm:space-x-4 items-start sm:items-center justify-between absolute sm:relative top-full left-0 bg-[#f5f4fb] sm:bg-transparent shadow-md sm:shadow-none z-10`}>

//                     <ul className="flex flex-col sm:flex-row justify-end space-x-4 space-y-2 sm:space-y-2 p-3 items-start sm:items-center">
//                         <input
//                             type="text"
//                             placeholder="Search..."
//                             className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                         <li>
//                             <Link href="/" className="hover:text-blue-500 transition-colors">Resource</Link>
//                         </li>
//                         <li>
//                             <Link href="/" className="hover:text-blue-500 transition-colors">Help</Link>
//                         </li>
//                         <li>
//                             <Link href="/" className="hover:text-blue-500 transition-colors">Contacts</Link>
//                         </li>
//                         <li>
//                             <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">Login</Link>
//                         </li>
//                     </ul>




//                 </nav>

//             </div>
//         </header >
//     );
// };

// export default Header;

