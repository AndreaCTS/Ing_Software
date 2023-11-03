package com.oscar.fullstackbackend.oauth2;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//@RestController
public class Oauth2Controller {
    @GetMapping("/oauth2")
    public String oauth2home(){
        return "Hello to oauth2";
    }

    @GetMapping("/securedoauth2")
    public String securedoath2(){
        return "Hello secured oauth2";
    }
}
