import { Component, OnInit } from '@angular/core';
import { Ecrivain } from '../../model/ecrivain.model';
import { Genre } from '../../model/Genre.model';
import { EcrivainService } from '../services/ecrivain.service';

@Component({
  selector: 'app-recherche-par-genre',
  templateUrl: './recherche-par-genre.component.html',
  styleUrl: './recherche-par-genre.component.css'
})
export class RechercheParGenreComponent implements OnInit {

  ecrivains! : Ecrivain[];
  idGenre! : number;
  genres! : Genre[];

  constructor(private ecrivainService : EcrivainService){};

  ngOnInit(): void {
    this.ecrivainService.listeGenres().
    subscribe(gens => {
      this.genres = gens._embedded.genres;
      // console.log(gens);
    });
  }

  onChange() {
    this.ecrivainService.rechercherParGenre(this.idGenre).
    subscribe(ecrivsGen =>{
      this.ecrivains = ecrivsGen
    });
  }
  
}
