package com.jrmj.ProductService.repository;

import com.jrmj.ProductService.model.Shoe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;

@Repository
public interface ShoeRepository extends JpaRepository<Shoe, Integer> {
    List<Shoe> findAllByBrand(String brand);
    List<Shoe> findAllByCategory(String category);


}
