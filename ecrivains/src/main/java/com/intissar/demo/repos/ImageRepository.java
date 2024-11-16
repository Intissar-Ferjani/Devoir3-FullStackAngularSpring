package com.intissar.demo.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intissar.demo.entities.Ecrivain;
import com.intissar.demo.entities.Image;

public interface ImageRepository extends JpaRepository<Image, Long>{

}
