const initialState = {
    isSignedIn: null,
    userId: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGN_IN_ACTION':
            return { ...state, isSignedIn: true, userId: action.payload }
        case 'SIGN_OUT_ACTION':
            return { ...state, isSignedIn: false, userId: null }
        default: return state;
    }
}