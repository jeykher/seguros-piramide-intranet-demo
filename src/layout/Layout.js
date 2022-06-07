import React, { useContext, useState, useEffect } from 'react';

import './Layout.scss';

import Loader from '../components/Loader/Loader';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import SpeedDialNavigator from '../components/SpeedDialNavigator/SpeedDialNavigator';

import { GlobalContext } from '../contexts/GlobalContext';

import useAppLoader from '../hooks/useAppLoader';

const Layout = ({children}) => {
    const { globalState: { loading } } = useContext(GlobalContext);
    useAppLoader();
    return (
        <>
            {
                loading ? 
                    (
                        <Loader/>
                    )
                : 
                    (
                        <>
                            <div className="ipos-app-content">
                                <Navbar />
                                <main className="ipos-app-main">
                                    {children}
                                </main>   
                                <Footer /> 
                            </div>
                            <SpeedDialNavigator />
                        </>
                    )
            }
        </>
    );
};

export default Layout;