import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    const navlinks = [
        {
            path : '/',
            link : 'Home'
        },{
            path : '/products',
            link : 'Product'
        },{
            path : '/aboutus',
            link : 'About us' 
        },{
            path : '/blogs' ,
            link : 'Blogs'
        },
       

    ]
  return (
    <div className="h-20 bg-black flex items-center justify-center space-x-4 text-white font-semibold text-lg">
    {navlinks.map(({path , link})=>(
        <Link className='hover:text-sky-500' key={link} to={path}>{link}</Link>
    ))}
    </div>
  );
}

export default NavBar;
