package com.jrmj.JRMJEdgeService.controller;

import com.jrmj.JRMJEdgeService.util.feign.CustomerServiceClient;
import com.jrmj.JRMJEdgeService.util.feign.ProductServiceClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RefreshScope
public class JrmjEdgeController {

    @Autowired
    private final CustomerServiceClient customerClient;

    @Autowired
    private final ProductServiceClient productClient;

    JrmjEdgeController(CustomerServiceClient customerClient, ProductServiceClient productClient) {
        this.customerClient = customerClient;
        this.productClient = productClient;
    }

    @GetMapping("/customer")
    public String testCustomer() {
        return customerClient.testCustomerService();
    }

    @GetMapping("/product")
    public String testProduct() {
        return productClient.testProductService();
    }

    @GetMapping("/trial")
    public String getTrial() {
        return "Trail";
    }
}
