import React from 'react';

import '../styles/globals.scss';

import GlobalContextProvider from '../contexts/GlobalContext';
import ThemeContextProvider from '../contexts/ThemeContext';
import StaticContextProvider from '../contexts/StaticContext';

import Router from '../routes/Router';

const App = () => {
    return (
        <>
            <GlobalContextProvider>
                <ThemeContextProvider>
                    <StaticContextProvider>
                        <Router />
                    </StaticContextProvider>
                </ThemeContextProvider>
            </GlobalContextProvider>     
        </>
    );
};

export default App;
