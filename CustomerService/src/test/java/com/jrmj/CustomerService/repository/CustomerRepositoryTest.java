package com.jrmj.CustomerService.repository;

import com.jrmj.CustomerService.model.Address;
import com.jrmj.CustomerService.model.Customer;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.transaction.Transactional;

import java.util.List;
import java.util.Optional;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CustomerRepositoryTest {

    @Autowired
    private CustomerRepository customerRepo;

    @Autowired
    private AddressRepository addressRepo;

    @Before
    public void setUp() throws Exception {
        customerRepo.deleteAll();
        addressRepo.deleteAll();

    }

    @Test
    @Transactional
    public void shouldAddCustomerAndAddresses() {
        Address addressShipping = new Address("33 Happy Drive", "Atlanta", "GA", "30350");
        Address addressBilling = new Address("255 Test Street", "Apt 5B", "Dunwoody", "GA", "30333");

        Customer testCustomer = new Customer();
        testCustomer.setEmail("test@customer.net");
        testCustomer.setFirstName("Test");
        testCustomer.setLastName("Customer");
        testCustomer.setPassword("12345678");
        testCustomer.setAddressShipping(addressShipping);
        testCustomer.setAddressBilling(addressBilling);
        testCustomer.setPhoneNumber("404-444-4040");

        Customer storedCustomer = customerRepo.save(testCustomer);

        testCustomer.setId(storedCustomer.getId());

        Optional<Address> storedShipping = addressRepo.findById(storedCustomer.getAddressShipping().getId());
        Optional<Address> storedBilling = addressRepo.findById(storedCustomer.getAddressBilling().getId());

        addressShipping.setId(storedShipping.get().getId());
        addressBilling.setId(storedBilling.get().getId());

        assertEquals(testCustomer, storedCustomer);
        assertEquals(addressShipping, storedShipping.get());
        assertEquals(addressBilling, storedBilling.get());
    }

    @Test
    @Transactional
    public void shouldFindAllCustomers() {
        Address addressShipping1 = new Address("1 Ship St", "Somewhere", "GA", "99999");
        Address addressShipping2 = new Address("2 Ship St", "Nowhere", "GA", "66666");

        Address addressBilling1 = new Address("1 Bill St", "Somewhere", "GA", "99999");
        Address addressBilling2 = new Address("2 Bill St", "Nowhere", "GA", "66666");

        Customer testCustomer1 = new Customer();
        testCustomer1.setEmail("test@customer.net");
        testCustomer1.setFirstName("Test");
        testCustomer1.setLastName("Customer");
        testCustomer1.setPassword("12345678");
        testCustomer1.setAddressShipping(addressShipping1);
        testCustomer1.setAddressBilling(addressBilling1);
        testCustomer1.setPhoneNumber("404-444-4040");

        Customer testCustomer2 = new Customer();
        testCustomer2.setEmail("customer@test.net");
        testCustomer2.setFirstName("Silly");
        testCustomer2.setLastName("Person");
        testCustomer2.setPassword("12345678");
        testCustomer2.setAddressShipping(addressShipping2);
        testCustomer2.setAddressBilling(addressBilling2);
        testCustomer2.setPhoneNumber("678-768-8768");

        customerRepo.save(testCustomer1);
        customerRepo.save(testCustomer2);

        List<Customer> storedCustomers = customerRepo.findAll();

        assertEquals(2, storedCustomers.size());
    }

    @Test
    @Transactional
    public void shouldFindCustomerById() {
        Address addressShipping = new Address("33 Happy Drive", "Atlanta", "GA", "30350");
        Address addressBilling = new Address("255 Test Street", "Apt 5B", "Dunwoody", "GA", "30333");

        Customer testCustomer = new Customer();
        testCustomer.setEmail("test@customer.net");
        testCustomer.setFirstName("Test");
        testCustomer.setLastName("Customer");
        testCustomer.setPassword("12345678");
        testCustomer.setAddressShipping(addressShipping);
        testCustomer.setAddressBilling(addressBilling);
        testCustomer.setPhoneNumber("404-444-4040");

        Customer storedCustomer = customerRepo.save(testCustomer);

        testCustomer.setId(storedCustomer.getId());

        Optional<Customer> returnedCustomer = customerRepo.findById(storedCustomer.getId());

        assertEquals(testCustomer, returnedCustomer.get());
    }

    @Test
    @Transactional
    public void shouldDeleteCustomer() {
        Address addressShipping = new Address("33 Happy Drive", "Atlanta", "GA", "30350");
        Address addressBilling = new Address("255 Test Street", "Apt 5B", "Dunwoody", "GA", "30333");

        Customer testCustomer = new Customer();
        testCustomer.setEmail("test@customer.net");
        testCustomer.setFirstName("Test");
        testCustomer.setLastName("Customer");
        testCustomer.setPassword("12345678");
        testCustomer.setAddressShipping(addressShipping);
        testCustomer.setAddressBilling(addressBilling);
        testCustomer.setPhoneNumber("404-444-4040");

        Customer storedCustomer = customerRepo.save(testCustomer);

        customerRepo.deleteById(storedCustomer.getId());

        Optional<Customer> fromRepo = customerRepo.findById(storedCustomer.getId());

        assertFalse(fromRepo.isPresent());
    }

    @Test
    @Transactional
    public void shouldUpdateCustomerAndAddress() {
        Address addressShipping = new Address("33 Happy Drive", "Atlanta", "GA", "30350");
        Address addressBilling = new Address("255 Test Street", "Apt 5B", "Dunwoody", "GA", "30333");

        Customer testCustomer = new Customer();
        testCustomer.setEmail("test@customer.net");
        testCustomer.setFirstName("Test");
        testCustomer.setLastName("Customer");
        testCustomer.setPassword("12345678");
        testCustomer.setAddressShipping(addressShipping);
        testCustomer.setAddressBilling(addressBilling);
        testCustomer.setPhoneNumber("404-444-4040");

        Customer storedCustomer = customerRepo.save(testCustomer);

        testCustomer.setId(storedCustomer.getId());

        Optional<Address> storedShipping = addressRepo.findById(storedCustomer.getAddressShipping().getId());
        Optional<Address> storedBilling = addressRepo.findById(storedCustomer.getAddressBilling().getId());

        addressShipping.setId(storedShipping.get().getId());
        addressBilling.setId(storedBilling.get().getId());

        Address newAddressShipping = new Address("55 New Drive", "Atlanta", "GA", "55055");
        Customer updateCustomer = new Customer();
        updateCustomer.setId(storedCustomer.getId());
        updateCustomer.setAddressShipping(newAddressShipping);
        updateCustomer.setPhoneNumber("678-768-8768");

        testCustomer.setAddressShipping(newAddressShipping);
        testCustomer.setPhoneNumber("678-768-8768");

        customerRepo.save(updateCustomer);

        Optional<Customer> returnedUpdatedCustomer = customerRepo.findById(storedCustomer.getId());

        assertEquals(testCustomer, returnedUpdatedCustomer.get());


    }
}