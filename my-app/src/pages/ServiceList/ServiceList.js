import React, {useEffect, useState} from "react"
import serviceApi from "../../api/serviceApi";
import './ServiceList.css';
import '../../styles/main.css';
import { NavLink } from "react-router-dom";

export default () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        serviceApi.fetchServices()
            .then(response => setServices(response.data))
    }, [])

    return (
        <table className="container mb170">
            <tbody>
                <th className="mt1">Paslauga</th>
                <th className="mt1">Aprasymas</th>
                <th className="mt1">Kaina</th>
                {services.map(service => (
                    <tr key={service.id}>
                        <th className="p10">{service.service}</th>
                        <th>{service.description}</th>
                        <th>{service.price}</th>
                        <h3><NavLink to='/cars'>MORE</NavLink></h3> 
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
