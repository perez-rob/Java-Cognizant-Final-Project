package com.jrmj.ProductService.controller;

import com.jrmj.ProductService.model.Shoe;
import com.jrmj.ProductService.repository.ShoeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@CrossOrigin
public class ShoeController {

    // Constructor injection
    private final ShoeRepository shoeRepo;

    public ShoeController(ShoeRepository shoeRepo) {
        this.shoeRepo = shoeRepo;
    }

    @GetMapping("/shoes")
    @ResponseStatus(HttpStatus.OK)
    public List<Shoe> getAllShoes() {
        List<Shoe> shoeList = shoeRepo.findAll();
        return shoeList;
    }

    @GetMapping("/shoes/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Shoe getShoeById(@PathVariable int id) {
        return shoeRepo.getById(id);
    }

    @GetMapping("/shoes/category/{category}")
    @ResponseStatus(HttpStatus.OK)
    public List<Shoe> getShoesByCategory(@PathVariable String category) {
        List<Shoe> shoeList = shoeRepo.findAllByCategory(category);
        return shoeList;
    }

    @GetMapping("/shoes/brand/{brand}")
    @ResponseStatus(HttpStatus.OK)
    public List<Shoe> getShoesByBrand(@PathVariable String brand) {
        List<Shoe> shoeList = shoeRepo.findAllByBrand(brand);
        return shoeList;
    }



}
