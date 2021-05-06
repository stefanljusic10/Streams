import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { submitFormReducer } from './submitFormReduer'

export const rootReducer = combineReducers({
    auth: authReducer,
    form: submitFormReducer
})