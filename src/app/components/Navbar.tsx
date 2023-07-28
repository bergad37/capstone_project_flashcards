import React from 'react';
import { SlUser} from 'react-icons/sl'

const Navbar: React.FC = () => {
  return (
    <nav className=" flex bg-blue-900 p-8">
      <div className="container mx-auto">
        <h1 className="text-white text-2xl">General Knowledge Workspace</h1>
        </div>
       <div className="container text-white">
        <ul className='flex px-30 p-2'>
        <div><li><a href="/">Home</a></li></div>
       <div><li><a href="/Cards">Cards</a></li></div>
       <div><li> Login</li></div> 
        </ul>
        </div>
        <div><SlUser /></div> 
    </nav>
  );
};

export default Navbar;
