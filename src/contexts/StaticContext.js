import React, { createContext, useReducer } from 'react';

import staticInitState from '../ini/staticInitState';

import StaticReducer from '../reducers/StaticReducer';

export const StaticContext = createContext();

const StaticContextProvider = ({children}) => {
    const [staticState, dispatch] = useReducer(StaticReducer, staticInitState);
    return (
        <StaticContext.Provider
            value={{
                staticState,
                dispatch
            }}
        >
            {children}
        </StaticContext.Provider>
    );
};

export default StaticContextProvider;