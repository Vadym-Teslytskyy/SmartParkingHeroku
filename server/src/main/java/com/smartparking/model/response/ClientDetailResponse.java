package com.smartparking.model.response;

import com.smartparking.entity.Client;
import com.smartparking.entity.Favorite;
import lombok.Data;

import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class ClientDetailResponse {

    private Long id;
    private Long providersId;
    private String firstName;
    private String lastName;
    private String email;
    private String providerName;
    private String role;
    private String image;
    private List<Long> favoritesId;
    private List<String> favoritesNames;

    public static ClientDetailResponse of(Client client) {
        ClientDetailResponse response = new ClientDetailResponse();
        response.setId(client.getId());

        if (client.getProvider() == null) {
            response.setProvidersId(0L);
            response.setProviderName("no provider");
        } else {
            response.setProvidersId(client.getProvider().getId());
            response.setProviderName(client.getProvider().getName());
        }

        response.setFirstName(client.getFirstName());
        response.setLastName(client.getLastName());
        response.setEmail(client.getEmail());
        response.setRole(client.getRole().toString());

        response.setFavoritesId(client.getFavorites()
                .stream().map(Favorite::getId)
                .collect(Collectors.toList()));
        response.setFavoritesNames(client.getFavorites()
                .stream().map(Favorite::getName)
                .collect(Collectors.toList()));
        if (client.getImage() != null) {
            response.setImage(Base64.getEncoder().encodeToString(client.getImage()));
        }

        return response;
    }
}
