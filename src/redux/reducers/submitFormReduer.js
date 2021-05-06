export const submitFormReducer = (state = null, action) => {
    switch (action.type) {
        case 'SUBMIT_FORM_ACTION':
            return action.payload
        default: return state;
    }
}