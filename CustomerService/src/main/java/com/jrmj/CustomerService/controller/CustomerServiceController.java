package com.jrmj.CustomerService.controller;


import com.jrmj.CustomerService.model.Customer;
import com.jrmj.CustomerService.repository.AddressRepository;
import com.jrmj.CustomerService.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@RestController
public class CustomerServiceController {

    @Autowired
    CustomerRepository customerRepo;

    // DON'T THINK WE NEED THIS SINCE JPA HANDLES ADDRESS AUTOMATICALLY...
//    @Autowired
//    AddressRepository addressRepo;

    @PostMapping("/customers")
    @ResponseStatus(HttpStatus.CREATED)
    public Customer addCustomer(@RequestBody Customer customer) {
        customer.setPassword(BCrypt.hashpw(customer.getPassword(), BCrypt.gensalt()));
        return customerRepo.save(customer);
    }

    @GetMapping("/customers")
    @ResponseStatus(HttpStatus.OK)
    public List<Customer> getAllCustomers() {
        return customerRepo.findAll();
    }

    // DOES THE RETURN VAL AFTER 'public' NEED TO BE OPTIONAL TYPE?
    @GetMapping("/customers/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Customer getCustomeer(@PathVariable Integer id) {
        Optional<Customer> returnedCustomer = customerRepo.findById(id);
        return returnedCustomer.orElse(null);
    }

    @PutMapping("/customers/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Customer updateCustomer(@PathVariable Integer id, @RequestBody Customer customer) {


        if( customer.getId() == null ) {
            customer.setId(id);
        }

        if(!customer.getId().equals(id)) {
            throw new IllegalArgumentException("Id in parameter must match the ID in the request body");
        }

        if(customer.getPassword() != null) {
            customer.setPassword(BCrypt.hashpw(customer.getPassword(), BCrypt.gensalt()));
        }

        return customerRepo.save(customer);
    }

    @DeleteMapping("/customers/{id}")
    public HashMap<String, String> deleteCustomer(@PathVariable Integer id) {
        customerRepo.deleteById(id);
        HashMap<String, String> responseMsg = new HashMap<>();
        responseMsg.put("status", "success");
        responseMsg.put("message", "customer " + id + " deleted.");
        return responseMsg;
    }

    @GetMapping("/customers/email/{email}")
    public List<Customer> getCustomerByEmail(@PathVariable String email) {
        return customerRepo.findByEmail(email);
    }
}
