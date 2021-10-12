package com.jrmj.ProductService.repository;

import com.jrmj.ProductService.model.Shoes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShoeRepository extends JpaRepository<Shoes, Integer> {


}
