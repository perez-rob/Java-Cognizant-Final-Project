package com.jrmj.ProductService.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.jrmj.ProductService.model.Product;
import com.jrmj.ProductService.repository.ProductRepository;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@WebMvcTest(ProductServiceController.class)
public class ProductServiceControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ProductRepository productRepo;

    private ObjectMapper mapper = new ObjectMapper();

    private Product product1;
    private String productJson;
    private List<Product> allProducts = new ArrayList<>();
    private String allProductsJson;

    @Before
    public void setUp() throws Exception {

    }
}