package lt.codeacademy.myappapi.repositories;

import lt.codeacademy.myappapi.entities.Service;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceRepository extends JpaRepository<Service, Long> {
}
