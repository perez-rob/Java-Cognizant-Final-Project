package com.jrmj.JRMJEdgeService.util.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name = "product-service")
public interface ProductServiceClient {


    @GetMapping("/shoes/category/all")
    public List getAllShoes();

    @GetMapping("/shoes/{id}")
    public Object getShoeById(@PathVariable Integer id);

    @GetMapping("/shoes/category/{category}")
    public List getShoesByCategory(@PathVariable String category);

    @GetMapping("/shoes/brand/{brand}")
    public List getShoesByBrand(@PathVariable String brand);

}
