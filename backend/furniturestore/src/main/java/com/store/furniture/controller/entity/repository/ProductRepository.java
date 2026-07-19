package com.store.furniture.controller.entity.repository;

import com.store.furniture.controller.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}