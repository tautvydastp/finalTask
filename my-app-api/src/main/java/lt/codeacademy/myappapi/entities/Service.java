package lt.codeacademy.myappapi.entities;


import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.Tolerate;

import javax.persistence.*;
import java.math.BigDecimal;

@Data
@Builder
@Entity
@Table(name = "Services")
public class Service {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "service_id")
    @ApiModelProperty(hidden = true)
    private Long id;

    @Column(name = "service")
    private String service;

    @Column(name = "description")
    private String description;

    @Column(name = "price")
    private BigDecimal price;

    @Tolerate
    public Service(){}

}
