package com.oscar.fullstackbackend.auth;

import com.oscar.fullstackbackend.model.UserRole;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

// Entidad en la cual se guardan los datos enviados por el cliente
// Apoya la creación de un nuevo usuario así como su respectivo token
public class RegisterRequest {

    private String name;
    private String username;
    private String email;
    private String password;
    private UserRole role;
}
