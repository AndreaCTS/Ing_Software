package com.oscar.fullstackbackend.token;

import com.oscar.fullstackbackend.exception.TokenNotFoundException;
import com.oscar.fullstackbackend.model.User;

public class GetUserByToken {

    private TokenRepository tokenRepository;

    public User getUser(String token) {
        Token t = tokenRepository.findByToken(token).orElseThrow(() -> new TokenNotFoundException(token));
        User user = t.getUser();
        return user;
    }
}
