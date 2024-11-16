import { Component } from '@angular/core';
import { Genre } from '../../model/Genre.model';
import { EcrivainService } from '../services/ecrivain.service';

@Component({
  selector: 'app-liste-genres',
  templateUrl: './liste-genres.component.html',
  styleUrl: './liste-genres.component.css'
})
export class ListeGenresComponent {

  genres! : Genre[];

  updatedG:Genre = {
    "idG": 0, 
    "nomG": "",
    descriptiong:""
  };

  ajout:boolean=true;

  constructor(private ecrivainService : EcrivainService) { }

  ngOnInit(): void {
    this.ecrivainService.listeGenres().
    subscribe(gens => {
      this.genres = gens._embedded.genres;
      // console.log(gens);
    });
  }

  chargerGenres(){
    this.ecrivainService.listeGenres().
    subscribe(gens => {this.genres = gens._embedded.genres;
    console.log(gens);
    });
  }

  genreUpdated(gen:Genre){
    console.log("Gen updated event",gen);
    this.ecrivainService.ajouterGenre(gen).
    subscribe( ()=> this.chargerGenres());
  }

  updatedGen(gen:Genre) {
    this.updatedG=gen;
    this.ajout=false;
  }
}
