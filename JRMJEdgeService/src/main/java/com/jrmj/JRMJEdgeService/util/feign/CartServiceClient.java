package com.jrmj.JRMJEdgeService.util.feign;


import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@FeignClient(name = "cart-service")
public interface CartServiceClient {


    @PostMapping("/cartdb")
    public Object addCart(Object cart);

    @GetMapping("/cartdb")
    public List getAllCarts();

    @GetMapping("/cartdb/{id}")
    public Object getCartById(@PathVariable Integer id);

    @PutMapping("/cartdb/{id}")
    public Object updateCart(@PathVariable Integer id, Object cart);


    @DeleteMapping("/cartdb/{id}")
    public HashMap<String, String> deleteCart(@PathVariable Integer id);

}