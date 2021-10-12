package com.jrmj.ProductService.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Objects;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "shoes")
public class Shoes {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer shoeId;

    private String brand;
    private String shoeName;
    private Integer category;
    private String imageUrl;
    private BigDecimal price;

    public Shoes() {
    }

    public Integer getShoeId() {
        return shoeId;
    }

    public void setShoeId(Integer shoeId) {
        this.shoeId = shoeId;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getShoeName() {
        return shoeName;
    }

    public void setShoeName(String shoeName) {
        this.shoeName = shoeName;
    }

    public Integer getCategory() {
        return category;
    }

    public void setCategory(Integer category) {
        this.category = category;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Shoes shoes = (Shoes) o;
        return Objects.equals(shoeId, shoes.shoeId) && Objects.equals(brand, shoes.brand) && Objects.equals(shoeName, shoes.shoeName) && Objects.equals(category, shoes.category) && Objects.equals(imageUrl, shoes.imageUrl) && Objects.equals(price, shoes.price);
    }

    @Override
    public int hashCode() {
        return Objects.hash(shoeId, brand, shoeName, category, imageUrl, price);
    }

    @Override
    public String toString() {
        return "Shoes{" +
                "shoeId=" + shoeId +
                ", brand='" + brand + '\'' +
                ", shoeName='" + shoeName + '\'' +
                ", category=" + category +
                ", imageUrl='" + imageUrl + '\'' +
                ", price=" + price +
                '}';
    }
}
