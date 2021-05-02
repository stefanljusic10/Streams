import React from 'react'
import { useFormik } from 'formik'
import './StreamCreate.css'

function StreamCreate() {

    const initialValues = {
        title: '',
        description: ''
    }

    const onSubmit = values => {
        console.log(values);
    }

    const validate = values => {
        let errors = {}

        if (!values.title) {
            errors.title = 'Required!'
        }

        if (!values.description) {
            errors.description = 'Required!'
        }

        return errors
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    console.log(formik.errors);

    return (
        <div>
            <form className="form-formik" onSubmit={formik.handleSubmit}>
                <input
                    type="text" name="title" placeholder="Title"
                    className="input-field"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.title}
                />
                {formik.touched.title && formik.errors.title ? 
                <div className="form-error">{formik.errors.title}</div> : null}

                <br /><br />
                <textarea
                    type="text" name="description" placeholder="Description"
                    className="input-field"
                    rows="7"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.description}
                />
                {formik.touched.description && formik.errors.description ? <div className="form-error">{formik.errors.description}</div> : null}

                <br /><br />
                <button type="submit">Create new Stream</button>
            </form>
        </div>
    )
}

export default StreamCreate
