package lt.codeacademy.myappapi.controller;

import lombok.Data;
import lt.codeacademy.myappapi.entities.Role;
import lt.codeacademy.myappapi.entities.User;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;
import java.util.stream.Collectors;

@RestController("UserController")
@RequestMapping("/user")
public class UserController {
    @GetMapping
    public UserDto getUser(@AuthenticationPrincipal User user) {
        return new UserDto(user);
    }

    @Data
    private static class UserDto {
        private String name;
        private String lastName;
        private Set<String> roles;

        UserDto(User user) {
            this.name = user.getName();
            this.lastName = user.getLastName();
            this.roles = user.getRoles().stream()
                    .map(Role::getRole)
                    .collect(Collectors.toSet());
        }
    }
}
