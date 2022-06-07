import react, { useState, useContext, useEffect } from 'react';

import { GlobalContext } from '../contexts/GlobalContext';

const useAppLoader = () => {
    const { globalState: { loading, loadingDelay }, dispatch } = useContext(GlobalContext);
    const [loadingApp, setLoadingApp] = useState(loading);
    useEffect(() => {
        setTimeout(() => {
            dispatch({
                type: 'SET_LOADING',
                payload: {
                    loading: false
                }
            });
            setLoadingApp(false);
        }, loadingDelay);
    }, []);
};

export default useAppLoader;