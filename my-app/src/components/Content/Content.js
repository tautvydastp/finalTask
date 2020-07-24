import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import ServiceForm from '../../pages/ServiceForm/ServiceForm'
import ServiceList from '../../pages/ServiceList/ServiceList'
import Login from '../../pages/Login/Login'
import Cars from '../../pages/Cars/Cars'
import ServicePage from '../../pages/ServicePage/ServicePage'
import './Content.css'
import '../../styles/main.css'

export default () => (
    <Switch>
        <Redirect exact from='/' to="/cars" />
        <Route path="/services/service"> 
            <ServiceForm />
        </Route>
        {/* <Route path="/services/:id">
            <ServicePage/>
        </Route> */}
        <Route className="ml350" path="/services">
            <ServiceList />
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/cars">
            <Cars />
        </Route>
        <Route>
            <h1 className="r"> PUSLAPIS NERASTAS </h1>
        </Route>
    </Switch>
)