package lt.codeacademy.myappapi.entities;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "Roles")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "role_id")
    private Long id;

    @Column(name = "role")
    private String role;
}
