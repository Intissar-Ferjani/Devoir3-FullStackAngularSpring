package com.intissar.demo.service;

import java.util.List;

import com.intissar.demo.dto.EcrivainDTO;
import com.intissar.demo.entities.Ecrivain;
import com.intissar.demo.entities.Genre;

public interface EcrivainService {

	Ecrivain saveEcrivain(Ecrivain e);
	
	Ecrivain updateEcrivain(Ecrivain e);
	
	void deleteEcrivain(Ecrivain e);
	void deleteEcrivainById(Long id);
	
	Ecrivain getEcrivain(Long id);
	List<Ecrivain> getAllEcrivains();
	
	List<Ecrivain> findByNomEcrivain(String nom);
	List<Ecrivain> findByNomEcrivainContains(String nom);
	List<Ecrivain> findByNomHonoraires (String nom, Double honoraires);
	
	List<Ecrivain> findByGenre (Genre genre);
	List<Ecrivain> findByGenreIdG(Long id);
	
	List<Ecrivain> findByOrderByNomEcrivainAsc();
	List<Ecrivain> trierEcrivainsNomsHonoraires();
	
	 
}
 