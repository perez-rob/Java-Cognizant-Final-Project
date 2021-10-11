package com.jrmj.JRMJEdgeService.util.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@FeignClient(name = "product-service")
public interface ProductServiceClient {

    @PostMapping("/products")
    public Object addProduct(Object product);

    @GetMapping("/products")
    public List getAllProducts();
}
