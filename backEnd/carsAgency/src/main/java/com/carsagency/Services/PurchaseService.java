package com.carsagency.Services;

import com.carsagency.Repositories.PurchaseRepository;
import com.carsagency.models.Purchase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PurchaseService {

    @Autowired
    private PurchaseRepository purchaseRepository;

    // Create a new purchase
    public Purchase createPurchase(Purchase purchase) {
        return purchaseRepository.save(purchase);
    }

    // Get all purchases
    public List<Purchase> getAllPurchases() {
        return purchaseRepository.findAll();
    }

    // Get a specific purchase by ID
    public Optional<Purchase> getPurchaseById(Long id) {
        return purchaseRepository.findById(id);
    }

    // Get purchases by customer ID
    public List<Purchase> getPurchasesByCustomerId(Long customerId) {
        // You can create a custom query method for this if needed
        return purchaseRepository.findAll(); // Adjust based on actual requirements
    }

    // Update a purchase
    public Purchase updatePurchase(Purchase purchase) {
        return purchaseRepository.save(purchase);
    }

    // Delete a purchase by ID
    public void deletePurchase(Long id) {
        purchaseRepository.deleteById(id);
    }
}
