import React from 'react'
import { Formik, Form, Field } from 'formik';
import serviceApi from '../../api/serviceApi'
import './ServiceForm.css'
import '../../styles/main.css'

const services = {
    service: '',
    description: '',
    price: ''
}

export default () => {
    const [service, setService] = React.useState({});
    const handleServiceChange = (e) => {
        setService(e.target.services[0])
    }
    return (
        <Formik
        
            initialValues={services}
            onSubmit={values => {
                serviceApi.createService(values, service)
            }}
        >
            {() => (

                <Form className="container">
                    <div className="mt1">
                        <label htmlFor="service">Service: </label>
                        <Field className="ml30" name="service" type="text"></Field>
                    </div>
                    <div className="mt1">
                        <label htmlFor="description">Description: </label>
                        <Field className="ml14" name="description" type="text"></Field>
                    </div>
                    <div className="mt1">
                        <label htmlFor="price">Price: </label>
                        <Field className="ml56" name="price" type="text"></Field>
                    </div>
                    {/* <div className="mt1">
                        <label htmlFor="file">File:</label>
                        <Field className="ml68" name="files" type="file" onChange={handleServiceChange}/>
                    </div> */}
                    <div className="mt1 ml216">
                        <input type="submit" value="Create"></input>
                    </div>
                </Form>
                
            )}
        </Formik>
    )
}