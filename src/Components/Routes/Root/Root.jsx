import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Sharde/Navbar/Navbar';
import Footer from '../../Sharde/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto bg-slate-300'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;