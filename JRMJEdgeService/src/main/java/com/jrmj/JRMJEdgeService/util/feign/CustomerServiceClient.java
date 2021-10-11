package com.jrmj.JRMJEdgeService.util.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@FeignClient(name = "customer-service")
public interface CustomerServiceClient {


    @PostMapping("/customers")
    public Object addCustomer(Object customer);

    @GetMapping("/customers")
    public List getAllCustomers();

}
