package lt.codeacademy.myappapi.services;

import lt.codeacademy.myappapi.entities.Service;
import lt.codeacademy.myappapi.repositories.ServiceRepository;
import lt.codeacademy.myappapi.services.exceptions.ServiceNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@org.springframework.stereotype.Service
public class ServicesService {

private ServiceRepository serviceRepository;
    private FileStorageService fileStorageService;

public ServicesService(
        ServiceRepository serviceRepository,
        FileStorageService fileStorageService
) {
    this.serviceRepository = serviceRepository;
    this.fileStorageService = fileStorageService;
}

    public List<Service> getAllServices() {
    return serviceRepository.findAll();
    }

    public Service createService(Service service) {

        return serviceRepository.save(service);
    }

    public Service getServiceById(Long id) {
        return serviceRepository.findById(id)
                .orElseThrow(() -> new ServiceNotFoundException("Service with id: " + id + " was not found"));
    }


    public void deleteService(Long id) {
    serviceRepository.deleteById(id);
    }
}
