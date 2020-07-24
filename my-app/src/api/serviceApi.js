import HTTP from '.'

export default {
    fetchServices() {
        return HTTP.get(`/services`)
    },
    fetchServicetById(id) {
        return HTTP.get(`/services/${id}`);
    },
    createService(service, file) {
        let data = new FormData();
        data.append("service", service.service);
        data.append("description", service.description);
        data.append("price", service.price);
        data.append("file", file);
        return HTTP.post('/services/service', data);
    }
}
