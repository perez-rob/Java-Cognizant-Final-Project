package com.jrmj.CartService.controller;

import com.jrmj.CartService.model.Cart;
import com.jrmj.CartService.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@RestController
public class CartServiceController {

    @Autowired
    CartRepository cartRepo;

    @PostMapping("/cartdb")
    @ResponseStatus(HttpStatus.CREATED)
    public Cart addCustomer(@RequestBody Cart cart) {
        return cartRepo.save(cart);
    }

    @GetMapping("/cartdb")
    @ResponseStatus(HttpStatus.OK)
    public List<Cart> getAllCustomers() {
        return cartRepo.findAll();
    }

    // DOES THE RETURN VAL AFTER 'public' NEED TO BE OPTIONAL TYPE?
    @GetMapping("/cartdb/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Cart getCustomeer(@PathVariable Integer id) {
        Optional<Cart> returnedCart = cartRepo.findById(id);
        return returnedCart.orElse(null);
    }

    @PutMapping("/cartdb/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Cart updateCustomer(@PathVariable Integer id, @RequestBody Cart cart) {


        if( cart.getId() == null ) {
            cart.setId(id);
        }

        if(!cart.getId().equals(id)) {
            throw new IllegalArgumentException("Id in parameter must match the ID in the request body");
        }


        return cartRepo.save(cart);
    }

    @DeleteMapping("/cartdb/{id}")
    public HashMap<String, String> deleteCustomer(@PathVariable Integer id) {
        cartRepo.deleteById(id);
        HashMap<String, String> responseMsg = new HashMap<>();
        responseMsg.put("status", "success");
        responseMsg.put("message", "customer " + id + " deleted.");
        return responseMsg;
    }

}
