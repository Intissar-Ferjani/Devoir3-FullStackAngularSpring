package com.intissar.demo.repos;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.intissar.demo.entities.Ecrivain;
import com.intissar.demo.entities.Genre;

@RepositoryRestResource(path = "rest")
public interface EcrivainRepository extends JpaRepository<Ecrivain, Long>{
	
	List <Ecrivain> findByNomEcrivain(String nomE);
	List <Ecrivain> findByNomEcrivainContains(String nomE);
	
	@Query("SELECT e FROM Ecrivain e WHERE e.nomEcrivain LIKE %:nom% AND e.honoraires >= :prix")
	List<Ecrivain> findByNomHonoraires(@Param("nom") String nom,@Param("prix") Double prix);
	
	@Query("select e from Ecrivain e where e.genre = ?1")
	List<Ecrivain> findByGenre (Genre genre);
	
	List<Ecrivain> findByGenreIdG(Long id);
	
	List<Ecrivain> findByOrderByNomEcrivainAsc();
	
	@Query("select e from Ecrivain e order by e.nomEcrivain ASC, e.honoraires DESC")
	List<Ecrivain> trierEcrivainsNomsHonoraires();

}
