package com.smartparking.dto;


import java.math.BigDecimal;
import java.util.List;

public class ParkingDto {
    private Long id;
    private Double latitude;
    private Double longitude;
    private BigDecimal price;
    private ProviderDto providerDto;
    private List<FavoriteDto> favoritesDto;
    private List<SpotDto> spotsDto;
    private Long numberSpots;
    private Long numberAvailableSpots;

    public static ParkingDto builder() {
        ParkingDto parkingDto = new ParkingDto();
        return parkingDto;
    }

    public ParkingDto setId(Long id) {
        this.id = id;
        return this;
    }


    public ParkingDto setLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }

    public ParkingDto setLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }

    public ParkingDto setPrice(BigDecimal price) {
        this.price = price;
        return this;
    }

    public ParkingDto setProviderDto(ProviderDto providerDto) {
        this.providerDto = providerDto;
        return this;
    }

    public ParkingDto setFavoritesDto(List<FavoriteDto> favoritesDto) {
        this.favoritesDto = favoritesDto;
        return this;
    }

    public ParkingDto setSpotsDto(List<SpotDto> spotsDto) {
        this.spotsDto = spotsDto;
        this.numberSpots = Long.valueOf(spotsDto.size());
        return this;
    }

    public ParkingDto setNumberSpots(Long numberSpots) {
        this.numberSpots = numberSpots;
        return this;
    }

    public ParkingDto setNumberAvailableSpots(Long numberAvailableSpots) {
        this.numberAvailableSpots = numberAvailableSpots;
        return this;
    }

    public Long getId() {
        return id;
    }

    public Double getLatitude() {
        return latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public ProviderDto getProviderDto() {
        return providerDto;
    }

    public List<FavoriteDto> getFavoritesDto() {
        return favoritesDto;
    }

    public List<SpotDto> getSpotsDto() {
        return spotsDto;
    }

    public Long getNumberSpots() {
        return numberSpots;
    }

    public Long getNumberAvailableSpots() {
        return numberAvailableSpots;
    }
}
