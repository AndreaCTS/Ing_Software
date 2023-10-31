package com.oscar.fullstackbackend.model;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User implements UserDetails {

    @Id
    @GeneratedValue
    private int id;
<<<<<<<< HEAD:Sprint_5/fullstack-backend/src/main/java/com/oscar/fullstackbackend/model/User.java

    private String name;
========
>>>>>>>> parent of 90251831f (Sprint 4):Sprint 2/fullstack-backend/src/main/java/com/oscar/fullstackbackend/model/User.java
    private String username;
    private String email;
    private String password;

<<<<<<<< HEAD:Sprint_5/fullstack-backend/src/main/java/com/oscar/fullstackbackend/model/User.java
    @Enumerated(EnumType.STRING)
    private UserRole role;

    public String getName() {   
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

========
>>>>>>>> parent of 90251831f (Sprint 4):Sprint 2/fullstack-backend/src/main/java/com/oscar/fullstackbackend/model/User.java
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return role.getAuthorities();
  }

    @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  @Override
  public boolean isAccountNonLocked() {
    return true;
  }

  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

  @Override
  public boolean isEnabled() {
    return true;
  }
}
