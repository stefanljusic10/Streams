export const signInAction = userId => {
    return{
        type: 'SIGN_IN_ACTION',
        payload: userId
    }
}