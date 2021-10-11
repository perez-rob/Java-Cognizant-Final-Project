package com.jrmj.ProductService.controller;

import com.jrmj.ProductService.model.Product;
import com.jrmj.ProductService.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductServiceController {

    @Autowired
    ProductRepository productRepo;

    @PostMapping("/products")
    @ResponseStatus(HttpStatus.CREATED)
    public Product addProduct(@RequestBody Product product) {
        return productRepo.save(product);
    }

    @GetMapping("/products")
    @ResponseStatus(HttpStatus.OK)
    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }
}
