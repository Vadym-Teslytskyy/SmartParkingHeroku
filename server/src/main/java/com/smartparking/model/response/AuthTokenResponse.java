package com.smartparking.model.response;

import com.smartparking.entity.Role;

public class AuthTokenResponse {
    private String token;
    private Role role;

    public AuthTokenResponse() {}

    public AuthTokenResponse(String token, Role role) {
        this.token = token;
        this.role = role;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
