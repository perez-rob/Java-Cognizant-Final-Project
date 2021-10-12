package com.jrmj.JRMJEdgeService.controller;

import com.jrmj.JRMJEdgeService.util.feign.CustomerServiceClient;
import com.jrmj.JRMJEdgeService.util.feign.ProductServiceClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RefreshScope
// check this if needed for other controllers
@CrossOrigin
public class JrmjEdgeController {

    @Autowired
    private final CustomerServiceClient customerClient;

    @Autowired
    private final ProductServiceClient productClient;

    JrmjEdgeController(CustomerServiceClient customerClient, ProductServiceClient productClient) {
        this.customerClient = customerClient;
        this.productClient = productClient;
    }

    @PostMapping("/customers")
    public Object addCustomer(@RequestBody Object customer) {
        return customerClient.addCustomer(customer);
    }

    @GetMapping("/customers")
    public List getAllCustomers() {
        return customerClient.getAllCustomers();
    }

    @GetMapping("/customers/{id}")
    public Object getCustomerById(@PathVariable Integer id) {
        return customerClient.getCustomerById(id);
    }

    @PutMapping("/customers/{id}")
    public Object updateCustomer(@PathVariable Integer id, @RequestBody Object customer) {
        return customerClient.updateCustomer(id, customer);
    }

    @DeleteMapping("/customers/{id}")
    public HashMap<String, String> deleteCustomer(@PathVariable Integer id) {
        return customerClient.deleteCustomer(id);
    }



    // ------ PRODUCTS ------

    @PostMapping("/products")
    public Object addProduct(@RequestBody Object product) {
        return productClient.addProduct(product);
    }

    @GetMapping("/products")
    public List getProduct() {
        return productClient.getAllProducts();
    }

    @GetMapping("/trial")
    public String getTrial() {
        return "Trial";
    }
}
