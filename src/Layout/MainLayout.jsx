import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Page/Navbar/Navbar';
import Footer from '../Components/Page/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='font-serif'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;