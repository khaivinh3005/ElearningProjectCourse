const initialState = {
    theme : false
}

const ChangeTheme =  (state = initialState, action) => {
    switch (action.type) {
    case 'CHANGETHEME':
        const newState = {...state, theme : action.data};
        state = newState
        return {...state}
       

    default:
        return state
    }
}

export default ChangeTheme;
