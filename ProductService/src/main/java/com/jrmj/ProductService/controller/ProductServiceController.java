package com.jrmj.ProductService.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductServiceController {

    @GetMapping("/products")
    public String testProductService() {
        return "Product Service Working";
    }
}
