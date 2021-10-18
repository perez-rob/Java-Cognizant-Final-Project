package com.jrmj.ProductService.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.jrmj.ProductService.model.Shoe;
import com.jrmj.ProductService.repository.ShoeRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(ShoeController.class)
public class ShoeControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ShoeRepository shoeRepo;

    private ObjectMapper mapper = new ObjectMapper();

    private Shoe shoe;
    private String shoeJson;
    private List<Shoe> shoeList = new ArrayList<>();
    private String shoeListJson;

    @Before
    public void setUp() throws Exception {
        shoe = new Shoe();
        shoe.setShoeId(30);
        shoe.setBrand("Tory Birch");
        shoe.setShoeName("Golden");
        shoe.setPrice(BigDecimal.valueOf(1200.00));
        shoe.setCategory("Women");
        shoe.setImageUrl("http://google.com");

        shoeJson = mapper.writeValueAsString(shoe);

        Shoe shoe2 = new Shoe();
        shoe2.setShoeId(123);
        shoe2.setBrand("Gucci");
        shoe2.setShoeName("Love");
        shoe2.setPrice(BigDecimal.valueOf(900));
        shoe2.setCategory("Women");
        shoe2.setImageUrl("http://google.com");

        shoeList.add(shoe);
        shoeList.add(shoe2);

        shoeListJson = mapper.writeValueAsString(shoeList);

    }

    @Test
    public void shouldReturnAllShoes() throws Exception {
        given(shoeRepo.findAll()).willReturn(shoeList);

        mockMvc.perform(
                        get("/shoes/category/all"))
                .andExpect(status().isOk())
                .andExpect(content().json(shoeListJson)
                );
    }

    @Test
    public void shouldReturnShoeById() throws Exception {
        given(shoeRepo.findById(30)).willReturn(java.util.Optional.ofNullable(shoe));

        mockMvc.perform(
                        get("/shoes/30"))
                .andExpect(status().isOk())
                .andExpect((content().json(shoeJson))
                );
    }

    @Test
    public void shouldReturnShoesByBrand() throws Exception {
        given(shoeRepo.findAllByBrand("Gucci")).willReturn(shoeList);

        mockMvc.perform(
                        get("/shoes/brand/Gucci"))
                .andExpect(status().isOk())
                .andExpect(content().json(shoeListJson)
                );
    }

    @Test
    public void shouldReturnShoesByCategory() throws Exception {
        given(shoeRepo.findAllByCategory("Women")).willReturn(shoeList);

        mockMvc.perform(
                        get("/shoes/category/Women"))
                .andExpect(status().isOk())
                .andExpect(content().json(shoeListJson));
    }




}
