package com.oscar.fullstackbackend.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static com.oscar.fullstackbackend.model.UserPermission.ADMIN_CREATE;
import static com.oscar.fullstackbackend.model.UserPermission.ADMIN_DELETE;
import static com.oscar.fullstackbackend.model.UserPermission.ADMIN_READ;
import static com.oscar.fullstackbackend.model.UserPermission.ADMIN_UPDATE;
import static com.oscar.fullstackbackend.model.UserPermission.MANAGER_CREATE;
import static com.oscar.fullstackbackend.model.UserPermission.MANAGER_DELETE;
import static com.oscar.fullstackbackend.model.UserPermission.MANAGER_READ;
import static com.oscar.fullstackbackend.model.UserPermission.MANAGER_UPDATE;

@RequiredArgsConstructor
public enum UserRole {

  USER(Collections.emptySet()),
  ADMIN(
          Set.of(
                  ADMIN_READ,
                  ADMIN_UPDATE,
                  ADMIN_DELETE,
                  ADMIN_CREATE,
                  MANAGER_READ,
                  MANAGER_UPDATE,
                  MANAGER_DELETE,
                  MANAGER_CREATE
          )
  ),
  MANAGER(
          Set.of(
                  MANAGER_READ,
                  MANAGER_UPDATE,
                  MANAGER_DELETE,
                  MANAGER_CREATE
          )
  )

  ;

  @Getter
  private final Set<UserPermission> permissions;

  public List<SimpleGrantedAuthority> getAuthorities() {
    var authorities = getPermissions()
            .stream()
            .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
            .collect(Collectors.toList());
    authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
    return authorities;
  }
}
