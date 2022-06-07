import React, { createContext, useReducer } from 'react';

import themeInitState from '../ini/themeInitState';

import ThemeReducer from '../reducers/ThemeReducer';

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
    const [themeState, dispatch] = useReducer(ThemeReducer, themeInitState);
    return (
        <ThemeContext.Provider
            value={{
                themeState,
                dispatch
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;