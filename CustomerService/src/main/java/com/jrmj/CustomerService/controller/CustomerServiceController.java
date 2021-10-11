package com.jrmj.CustomerService.controller;


import com.jrmj.CustomerService.model.Customer;
import com.jrmj.CustomerService.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CustomerServiceController {

    @Autowired
    CustomerRepository customerRepo;

    @PostMapping("/customers")
    @ResponseStatus(HttpStatus.CREATED)
    public Customer addCustomer(@RequestBody Customer customer) {
        return customerRepo.save(customer);
    }

    @GetMapping("/customers")
    @ResponseStatus(HttpStatus.OK)
    public List<Customer> getAllCustomers() {
        return customerRepo.findAll();
    }
}
