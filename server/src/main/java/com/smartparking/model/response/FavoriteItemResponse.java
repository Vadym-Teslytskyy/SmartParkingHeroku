package com.smartparking.model.response;

import com.smartparking.entity.Favorite;
import lombok.Data;

@Data
public class FavoriteItemResponse {

    private Long id;
    private String name;

    public static FavoriteItemResponse of(Favorite favorite) {
        FavoriteItemResponse favoriteItemResponse = new FavoriteItemResponse();
        favoriteItemResponse.setId(favorite.getId());
        favoriteItemResponse.setName(favorite.getName());
        return favoriteItemResponse;
    }
}
