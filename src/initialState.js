export const initialState = {
    user: null
}

const reducer = (state, action) => {
    switch(action.type) {
        case "USER_LOGIN":
            return {
                ...state, 
                user: action.user
            };
        case "LOGOUT":
            return {
                ...state,
                user: null
            };
        default: 
            return state
    }
}

export default reducer;
