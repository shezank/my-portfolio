import React from 'react';

const Navbar = () => {
    const navlinks = <>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a href='#skill'>Skills</a></li>
        <li><a href='#Projects'>Project</a></li>
        <li><a>Contruct-Us</a></li>
    </>
    return (
        <div className="navbar bg-slate-50 fixed z-10 mx-auto max-w-7xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Shezan Khan</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;