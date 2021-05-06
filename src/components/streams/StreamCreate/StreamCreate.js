import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { submitFormAction } from '../../../redux/actions/submitFormAction'
import './StreamCreate.css'

function StreamCreate() {

    const dispatch = useDispatch()
    const form = useSelector(state => state.form)
    console.log(form);

    const initialValues = {
        title: '',
        description: ''
    }

    const onSubmit = values => {
        dispatch(submitFormAction(values))
    }

    const validationSchema = Yup.object({
        title: Yup.string().required('Required!'),
        description: Yup.string().required('Required!')
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form className="form-formik">
                <Field
                    type="text" name="title" placeholder="Title"
                    className="input-field"
                />
                <ErrorMessage name='title' />

                <br /><br />
                <Field
                    as='textarea'
                    type="text" name="description" placeholder="Description"
                    className="input-field"
                    rows="7"
                />
                <ErrorMessage name='description' />

                <br /><br />
                <button type="submit">Create new Stream</button>
            </Form>
        </Formik>
    )
}

export default StreamCreate
