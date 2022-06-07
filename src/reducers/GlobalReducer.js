const GlobalReducer = (state, action) => {
    const {type, payload} = action;
    console.log(action);
    switch(type) {
        case 'SET_LOADING':
            const { loading } = payload;
            state.loading = loading;
        default:
            return state;
    }
};

export default GlobalReducer;