package com.jrmj.CustomerService.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomerServiceController {

    @GetMapping("/customers")
    public String testCustomerService() {
        return "Customer Service working";
    }
}
