import Link from 'next/link';
import React from 'react';
import { SlUser} from 'react-icons/sl'

const Navbar: React.FC = () => {
  return (
    <nav className=" flex bg-blue-900 p-4 navbar">
      <div className="container mx-auto">
        <h1 className="text-white text-2xl">General Knowledge Workspace</h1>
        </div>
       <div className="container text-white">
        <ul className='flex px-30 p-2'>
        <div className='tab'><Link href="/">Home</Link></div>
       <div className='tab'><Link href="/Cards">Cards</Link></div>
       <div className='tab'><Link href="">Login</Link></div> 
        </ul>
        </div>
        <div className='flex items-center justify-center'><SlUser className='account' /></div> 
    </nav>
  );
};

export default Navbar;
