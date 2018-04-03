package com.smartparking.model.request;

import lombok.Data;

@Data
public class ClientRequest {
    private Long providersId;
    private String firstName;
    private String lastName;
    private String email;
    private String role;
    private String image;
}
