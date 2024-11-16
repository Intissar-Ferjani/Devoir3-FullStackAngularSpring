package com.intissar.demo.entities;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class Ecrivain { 

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idEcrivain;
	private String nomEcrivain;
	private Double honoraires ;

	private Date dateDebutCarriere;

	@ManyToOne
	private Genre genre;
	
//	@OneToOne
//	private Image image;
	
	@OneToMany (mappedBy = "ecrivain")
	 private List<Image> images;
	 

	public Genre getGenre() {
		return genre;
	}

	public void setGenre(Genre genre) {
		this.genre = genre;
	}
	
	public Date getDateDebutCarriere() {
		return dateDebutCarriere;
	}

	public void setDateDebutCarriere(Date dateDebutCarriere) {
		this.dateDebutCarriere = dateDebutCarriere;
	}

	public Ecrivain() {super();}
	
	public Ecrivain(String nomEcrivain, Double honoraires, Date dateDebutCarriere) {
		super();
		this.nomEcrivain = nomEcrivain;
		this.honoraires = honoraires;
		this.dateDebutCarriere = dateDebutCarriere;
	}	

	public Long getIdEcrivain() {
		return idEcrivain;
	}

	public void setIdEcrivain(Long idEcrivain) {
		this.idEcrivain = idEcrivain;
	}
   
	public String getNomEcrivain() {
		return nomEcrivain;
	}

	public void setNomEcrivain(String nomEcrivain) {
		this.nomEcrivain = nomEcrivain;
	}

	
	public Double getHonoraires() {
		return honoraires;
	}

	public void setHonoraires(Double honoraires) {
		this.honoraires = honoraires;
	}

	@Override
	public String toString() {
		return "Ecrivain [idEcrivain=" + idEcrivain + ", nomEcrivain=" + nomEcrivain+ ", honoraires=" + honoraires
				+ ", dateDebutCarriere=" + dateDebutCarriere + "]";
	}

	public List<Image> getImages() {
		return images;
	}

	public void setImages(List<Image> images) {
		this.images = images;
	}
	
	
	
	
}
