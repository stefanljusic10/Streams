import React from 'react'
import { useFormik } from 'formik'

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
            <form onSubmit={formik.handleSubmit}>
                <input
                    type="text" name="title" placeholder="Title"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                />
                <br /><br />
                <input
                    type="text" name="description" placeholder="Description"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                />
                <br /><br />
                <button type="submit">Create new Stream</button>
            </form>
        </div>
    )
}

export default StreamCreate
