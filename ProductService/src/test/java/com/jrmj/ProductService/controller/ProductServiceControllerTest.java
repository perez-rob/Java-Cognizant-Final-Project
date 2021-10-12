package com.jrmj.ProductService.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.jrmj.ProductService.model.Shoe;
import com.jrmj.ProductService.repository.ShoeRepository;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringRunner.class)
@WebMvcTest(ProductServiceController.class)
public class ProductServiceControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ShoeRepository productRepo;

    private ObjectMapper mapper = new ObjectMapper();

    private Shoe product1;
    private String productJson;
    private List<Shoe> allProducts = new ArrayList<>();
    private String allProductsJson;

    @Before
    public void setUp() throws Exception {

    }
}