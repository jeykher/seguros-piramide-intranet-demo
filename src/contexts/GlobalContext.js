import React, { createContext, useReducer } from 'react';

import globalInitState from '../ini/globalInitState';

import GlobalReducer from '../reducers/GlobalReducer';

export const GlobalContext = createContext();

const GlobalContextProvider = ({children}) => {
    const [globalState, dispatch] = useReducer(GlobalReducer, globalInitState);
    return (
        <GlobalContext.Provider
            value={{
                globalState,
                dispatch
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;