export const submitFormAction = formValues => {
    return{
        type: 'SUBMIT_FORM_ACTION',
        payload: formValues
    }
}