package com.smartparking.model.response;

import com.smartparking.entity.Favorite;

public class FavoriteItemResponse {
    private Long id;
    private String name;

    public static FavoriteItemResponse of(Favorite favorite) {
        FavoriteItemResponse favoriteItemResponse = new FavoriteItemResponse();
        favoriteItemResponse.setId(favorite.getId());
        favoriteItemResponse.setName(favorite.getName());
        return favoriteItemResponse;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
