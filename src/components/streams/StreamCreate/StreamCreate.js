import React from 'react'
import { useFormik } from 'formik'
import './StreamCreate.css'

function StreamCreate() {

    const formik = useFormik({
        initialValues: {
            title: '',
            description: ''
        },
        onSubmit: values => {
            console.log(values);
        }
    })

    return (
        <div>
            <form className="form-formik" onSubmit={formik.handleSubmit}>
                <input
                    type="text" name="title" placeholder="Title"
                    className="input-field"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                />
                <br/><br/>
                <textarea
                    type="text" name="description" placeholder="Description"
                    className="input-field"
                    rows="7"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                />
                <br/><br/>
                <button type="submit">Create new Stream</button>
            </form>
        </div>
    )
}

export default StreamCreate
