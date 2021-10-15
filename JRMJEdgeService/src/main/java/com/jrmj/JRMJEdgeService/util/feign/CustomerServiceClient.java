package com.jrmj.JRMJEdgeService.util.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@FeignClient(name = "customer-service")
public interface CustomerServiceClient {


    @PostMapping("/customers")
    public Object addCustomer(Object customer);

    @GetMapping("/customers")
    public List getAllCustomers();

    @GetMapping("/customers/{id}")
    public Object getCustomerById(@PathVariable Integer id);

    @PutMapping("/customers/{id}")
    public Object updateCustomer(@PathVariable Integer id, Object customer);

    @GetMapping("/customers/email/{email}")
    public List getCustomerByEmail(@PathVariable String email);

    @DeleteMapping("/customers/{id}")
    public HashMap<String, String> deleteCustomer(@PathVariable Integer id);

}
