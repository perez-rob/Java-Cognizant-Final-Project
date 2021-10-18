package com.jrmj.JRMJEdgeService.controller;

import com.jrmj.JRMJEdgeService.util.feign.CartServiceClient;
import com.jrmj.JRMJEdgeService.util.feign.CustomerServiceClient;
import com.jrmj.JRMJEdgeService.util.feign.ProductServiceClient;
import com.jrmj.JRMJEdgeService.util.feign.StripeServiceClient;
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

    @Autowired
    private final StripeServiceClient stripeClient;

    @Autowired
    private final CartServiceClient cartClient;

    JrmjEdgeController(CustomerServiceClient customerClient, ProductServiceClient productClient, StripeServiceClient stripeClient, CartServiceClient cartClient) {
        this.customerClient = customerClient;
        this.productClient = productClient;
        this.stripeClient = stripeClient;
        this.cartClient = cartClient;
    }

    // ------ CUSTOMERS ------

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

    @GetMapping("/customers/email/{email}")
    public List getCustomerByEmail(@PathVariable String email) {
        return customerClient.getCustomerByEmail(email);
    }


    // ------ PRODUCTS ------

    @GetMapping("/shoes/category/all")
    public List getAllShoes() {
        return productClient.getAllShoes();
    }

    @GetMapping("/shoes/{id}")
    public Object getShoeById(@PathVariable Integer id) {
        return productClient.getShoeById(id);
    }

    @GetMapping("/shoes/category/{category}")
    public List getShoesByCategory(@PathVariable String category) {
        return productClient.getShoesByCategory(category);
    }

    @GetMapping("/shoes/brand/{brand}")
    public List getShoesByBrand(@PathVariable String brand) {
        return productClient.getShoesByBrand(brand);
    }

    // ------ STRIPE ------

    @PostMapping("/charge")
    public Object chargeCard(@RequestHeader(value="token") String token, @RequestHeader(value="amount") Double amount) {
        return stripeClient.chargeCard(token, amount);
    }

    // ------ CART ------

    @PostMapping("/cartdb")
    public Object addCart(@RequestBody Object cart) {
        return cartClient.addCart(cart);
    }

    @GetMapping("/cartdb")
    public List getAllCarts() {
        return cartClient.getAllCarts();
    }

    @GetMapping("/cartdb/{id}")
    public Object getCartById(@PathVariable Integer id) {
        return cartClient.getCartById(id);
    }

    @PutMapping("/cartdb/{id}")
    public Object updateCart(@PathVariable Integer id, @RequestBody Object cart) {
        return cartClient.updateCart(id, cart);
    }

    @DeleteMapping("/cartdb/{id}")
    public HashMap<String, String> deleteCart(@PathVariable Integer id) {
        return cartClient.deleteCart(id);
    }

}
