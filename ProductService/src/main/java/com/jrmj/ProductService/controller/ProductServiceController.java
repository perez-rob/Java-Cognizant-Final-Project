package com.jrmj.ProductService.controller;

import com.jrmj.ProductService.model.Shoe;
import com.jrmj.ProductService.repository.ShoeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductServiceController {

    @Autowired
    ShoeRepository productRepo;

    @PostMapping("/products")
    @ResponseStatus(HttpStatus.CREATED)
    public Shoe addProduct(@RequestBody Shoe product) {
        return productRepo.save(product);
    }

    @GetMapping("/products")
    @ResponseStatus(HttpStatus.OK)
    public List<Shoe> getAllProducts() {
        return productRepo.findAll();
    }
}
