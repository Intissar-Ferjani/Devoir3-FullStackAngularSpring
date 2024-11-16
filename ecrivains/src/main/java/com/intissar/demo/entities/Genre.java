package com.intissar.demo.entities;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor; 

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Genre { 
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idG;
	private String nomG;
	private String descriptionG;
	
	@OneToMany(mappedBy = "genre")
	@JsonIgnore
	private List<Ecrivain> ecrivains;
	
	public List<Ecrivain> getEcrivains() {
		return ecrivains;
	}

	public void setEcrivains(List<Ecrivain> ecrivains) {
		this.ecrivains = ecrivains;
	}

	public Long getIdG() {
		return idG;
	}
	
	public void setIdG(Long idG) {
		this.idG = idG;
	}
	
	public String getNomG() {
		return nomG;
	}
	
	public void setNomG(String nomG) {
		this.nomG = nomG;
	}
	
	public String getDescriptionG() {
		return descriptionG;
	}
	
	public void setDescriptionG(String descriptionG) {
		this.descriptionG = descriptionG;
	}

	@Override
	public String toString() {
		return "Genre [idG=" + idG + ", nomG=" + nomG + ", descriptionG=" + descriptionG + "]";
	}
	
	
	
	
	
}
