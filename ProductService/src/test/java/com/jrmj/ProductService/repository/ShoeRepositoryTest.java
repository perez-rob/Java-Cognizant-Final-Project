package com.jrmj.ProductService.repository;

import com.jrmj.ProductService.model.Shoe;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ShoeRepositoryTest {

    @Autowired
    private ShoeRepository shoeRepo;

    @Before
    public void setUp() throws Exception {
        shoeRepo.deleteAll();
    }

    @Test
    @Transactional
    public void shouldAddAndFindById() {

        Shoe shoe = new Shoe();
        shoe.setBrand("Tory Birch");
        shoe.setShoeName("Golden");
        shoe.setPrice(BigDecimal.valueOf(1200.00));
        shoe.setCategory("Women");
        shoe.setImageUrl("http://google.com");

        shoeRepo.save(shoe);

        Shoe shoeFromRepo = shoeRepo.getById(shoe.getShoeId());

        assertEquals(shoeFromRepo, shoe);

    }

    @Test
    @Transactional
    public void shouldAddFindDeleteShoe() {
        Shoe shoe = new Shoe();
        shoe.setBrand("Tory Birch");
        shoe.setShoeName("Golden");
        shoe.setPrice(BigDecimal.valueOf(1200.00));
        shoe.setCategory("Women");
        shoe.setImageUrl("http://google.com");

        shoeRepo.save(shoe);

        Shoe shoeFromRepo = shoeRepo.getById(shoe.getShoeId());
        assertEquals(shoeFromRepo, shoe);

        shoeRepo.deleteById(shoe.getShoeId());

        Optional<Shoe> s;
        s = shoeRepo.findById(shoe.getShoeId());
        assertFalse(s.isPresent());

    }

    @Test
    @Transactional
    public void shouldUpdateShoe() {
        Shoe shoe = new Shoe();
        shoe.setBrand("Tory Birch");
        shoe.setShoeName("Golden");
        shoe.setPrice(BigDecimal.valueOf(1200.00));
        shoe.setCategory("Women");
        shoe.setImageUrl("http://google.com");

        shoeRepo.save(shoe);

        shoe.setPrice(BigDecimal.valueOf(1100.00));

        shoeRepo.save(shoe);

        Shoe shoeFromRepo = shoeRepo.getById(shoe.getShoeId());

        assertEquals(shoeFromRepo, shoe);

    }


    @Test
    @Transactional
    public void shouldGetShoesByBrand() {
        List<Shoe> shoesList = new ArrayList<>();

        Shoe shoe = new Shoe();
        shoe.setBrand("Tori Birch");
        shoe.setShoeName("Golden");
        shoe.setPrice(BigDecimal.valueOf(1200.00));
        shoe.setCategory("Women");
        shoe.setImageUrl("http://google.com");

        Shoe shoe2 = new Shoe();
        shoe2.setBrand("Tori Birch");
        shoe2.setShoeName("cool sneaker");
        shoe2.setPrice(BigDecimal.valueOf(1000.00));
        shoe2.setCategory("Women");
        shoe2.setImageUrl("http://google.com");

        shoesList.add(shoe);
        shoesList.add(shoe2);

        shoeRepo.save(shoe);
        shoeRepo.save(shoe2);

        List<Shoe> listFromRepo = shoeRepo.findAllByBrand("Tori Birch");

        assertEquals(2, listFromRepo.size());

    }

    @Test
    @Transactional
    public void shouldGetShoesByCategory() {
        List<Shoe> shoesList = new ArrayList<>();

        Shoe shoe = new Shoe();
        shoe.setBrand("Gucci");
        shoe.setShoeName("Golden");
        shoe.setPrice(BigDecimal.valueOf(1200.00));
        shoe.setCategory("Women");
        shoe.setImageUrl("http://google.com");

        Shoe shoe2 = new Shoe();
        shoe2.setBrand("Tori Birch");
        shoe2.setShoeName("cool sneaker");
        shoe2.setPrice(BigDecimal.valueOf(1000.00));
        shoe2.setCategory("Women");
        shoe2.setImageUrl("http://google.com");

        shoesList.add(shoe);
        shoesList.add(shoe2);

        shoeRepo.save(shoe);
        shoeRepo.save(shoe2);

        List<Shoe> listFromRepo = shoeRepo.findAllByCategory("Women");

        assertEquals(2, listFromRepo.size());

    }
}