package lt.codeacademy.myappapi.controller;

import lt.codeacademy.myappapi.entities.Service;
import lt.codeacademy.myappapi.services.ServicesService;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/services")
public class ServiceController {
    private final ServicesService servicesService;

    public ServiceController(ServicesService servicesService) {
        this.servicesService = servicesService;
    }


    @GetMapping
    public List<Service> getServices() {
        return servicesService.getAllServices();
    }

    @GetMapping("/{id}")
    public Service getServiceById(@PathVariable Long id) {
        return servicesService.getServiceById(id);
    }

    @PostMapping("/service")
    public Service createService(
            @RequestParam(name = "service") String serviceName,
            @RequestParam(name = "description", required = false) String description,
            @RequestParam(name = "price") BigDecimal price
    ) {
        Service service = Service.builder()
                .service(serviceName)
                .description(description)
                .price(price)
                .build();

        return servicesService.createService(service);
    }

//    @GetMapping("/services/{id}/delete")
//    public List<Service> deleteProduct(@PathVariable Long id) {
//        servicesService.deleteService(id);
//        List<Service> services = servicesService.getAllServices();
//        return services;
//    }

}
