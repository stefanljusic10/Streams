const initialState = {
    isSignedIn: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGN_IN_ACTION':
            return { ...state, isSignedIn: true }
        case 'SIGN_OUT_ACTION':
            return { ...state, isSignedIn: false }
        default: return state;
    }
}