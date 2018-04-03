package com.smartparking.model.request;

import com.smartparking.entity.Client;
import com.smartparking.entity.Favorite;
import com.smartparking.entity.Parking;

public class FavoriteRequest {

    private Long id;

    private String favoriteName;

    public String getFavoriteName() {
        return favoriteName;
    }

    public void setFavoriteName(String favoriteName) {
        this.favoriteName = favoriteName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Favorite toFavorite(Client client, Parking parking) {
        Favorite favorite = new Favorite();
        favorite.setId(id);
        favorite.setName(favoriteName);
        favorite.setClient(client);
        favorite.setParking(parking);
        return favorite;
    }
}
