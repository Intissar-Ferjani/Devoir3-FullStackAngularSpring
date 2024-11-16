package com.intissar.demo;

import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.intissar.demo.entities.Ecrivain;
import com.intissar.demo.entities.Genre;
import com.intissar.demo.repos.EcrivainRepository;

@SpringBootTest
class EcrivainsApplicationTests {

	@Autowired
	private EcrivainRepository ecrivaintRepository;
	
	@Test
	public void testCreateEcrivain() {
		Ecrivain ecriv = new Ecrivain("Bill",2300.600,new Date());
		ecrivaintRepository.save(ecriv);  
	}
	
	@Test
	public void testFindEcrivain()
	{
		Ecrivain e = ecrivaintRepository.findById(1L).get();
		System.out.println(e);
	}
	
	@Test
	public void testUpdateEcrivain()
	{
		Ecrivain e = ecrivaintRepository.findById(1L).get();
		e.setHonoraires(1000.0);
		ecrivaintRepository.save(e);
	}
	
	@Test
	public void testDeleteEcrivain()
	{
		ecrivaintRepository.deleteById(2L);;
	}

	@Test
	public void testListerTousEcrivains()
	{
		List<Ecrivain> ecrivs = ecrivaintRepository.findAll();
		for (Ecrivain e : ecrivs)
		{
			System.out.println(e);
		} 
	}
	
	@Test
	public void testFindEcrivainByNom()
	{
		List <Ecrivain> es = ecrivaintRepository.findByNomEcrivain("James Will");
		for (Ecrivain e : es)
		{
			System.out.println(e);
		} 
	}

	@Test
	public void testFindEcrivainByNomContains() 
	{  
		List <Ecrivain> es = ecrivaintRepository.findByNomEcrivainContains("J");
		for (Ecrivain e : es)
		{
			System.out.println(e);
		} 
	}
	
	@Test
	public void testfindByNomHonoraires() {
	    List<Ecrivain> ecrivs = ecrivaintRepository.findByNomHonoraires("James Will", 2200.5);
	   	    
	    for (Ecrivain e : ecrivs) {
	        System.out.println(e);
	    } 
	}

	@Test
	public void testfindByGenre()
	{
		Genre gen = new Genre();
		gen.setIdG(1L);
		List<Ecrivain> ecrivs = ecrivaintRepository.findByGenre(gen);
		for (Ecrivain e : ecrivs)
		{
			System.out.println(e);
		}
	}
	
	@Test
	public void testfindByGenreIdG()
	{
	List<Ecrivain> ecrivs = ecrivaintRepository.findByGenreIdG(2L);
		for (Ecrivain e : ecrivs)
		{
			System.out.println(e);
		}
	 }
	
	@Test
	public void testfindByOrderByNomEcrivainAsc()
	{
		List<Ecrivain> ecrivs = ecrivaintRepository.findByOrderByNomEcrivainAsc();
		for (Ecrivain e : ecrivs)
		{
			System.out.println(e);
		}
	}
	
	
	@Test
	public void testTrierEcrivainsNomsHonoraires()
	{
		List<Ecrivain> ecrivs = ecrivaintRepository.trierEcrivainsNomsHonoraires();
		for (Ecrivain e : ecrivs)
		{
			System.out.println(e);
		}
	}



}
