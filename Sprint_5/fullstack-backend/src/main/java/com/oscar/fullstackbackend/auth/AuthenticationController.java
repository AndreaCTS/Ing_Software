package com.oscar.fullstackbackend.auth;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("/userAuth")
@RequiredArgsConstructor

// Controla las acciones realizadas en la página, recibe los datos del front
public class AuthenticationController {

  private final AuthenticationService service;

  // Se reciben los datos del formulario de registro web para asignarlos al
  // usuario
  @PostMapping("/register")
  public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
    return ResponseEntity.ok(service.register(request));
  }

  // Se verifica si los datos enviados por el cliente corresponden a un usuario ya
  // existente, usando email y contraseña
  @PostMapping("/authenticate")
  public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
    return ResponseEntity.ok(service.authenticate(request));
  }

  @GetMapping("/test/{id}")
  public String getCommentBarrio(@PathVariable int id) {
    return "Permisos listos " + id;
  }

}
