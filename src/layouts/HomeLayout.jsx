import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';

const HomeLayout = () => {
    return (
      <div>
        <header>
          <Navbar />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
        <Toaster />
      </div>
    );
};

export default HomeLayout;