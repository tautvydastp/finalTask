import React, {useContext} from "react";
import {Field, Form, Formik} from "formik";
import {setCredentials} from "../../api";
import {UserContext} from "../../App";
import userApi from "../../api/userApi";
import { useHistory, useLocation } from "react-router-dom"
import './Login.css'

const initialValues = {
    username: '',
    password: ''
}

export default () => {
    const {login} = useContext(UserContext)
    const history = useHistory();
    const location = useLocation()

    const { from } = location.state || { from: { pathname: '/' } }

    const onSubmit = values => {
        setCredentials(values)

        userApi.getUser()
            .then(({data}) => {
                login(data)
                history.replace(from)
            })
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}>
            {() => (
                <Form className="mt90">
                    <div c>
                        <label htmlFor="username">Username:</label>
                        <Field name="username" type="text"/>
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <Field name="password" type="password"/>
                    </div>
                    <div>
                        <button variant="contained" color="primary" type="submit">Login</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
