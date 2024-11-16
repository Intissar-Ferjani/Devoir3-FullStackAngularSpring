import { Component, OnInit } from '@angular/core';
import { Ecrivain } from '../../model/ecrivain.model';
import { EcrivainService } from '../services/ecrivain.service';
import { Genre } from "../../model/Genre.model";
import { Router } from '@angular/router';
import { Image } from '../../model/Image.model';

@Component({
  selector: 'app-add-ecrivain',
  templateUrl: './add-ecrivain.component.html',
  
})
export class AddEcrivainComponent implements OnInit {

  newEcrivain = new Ecrivain();
  msg : string = "";

  genres! : Genre[];
  newIdG! : number;
  newGenre! : Genre;

  uploadedImage!: File;
  imagePath: any;


  constructor(private ecrivainService: EcrivainService , private router :Router ) { }

  // ngOnInit(): void { 
  //   // this.genres = this.ecrivainService.listeGenres();
  // }
 
  ngOnInit(): void {
    this.ecrivainService.listeGenres().
    subscribe(gens => {
      // console.log(gens);
      this.genres = gens._embedded.genres;
    }
    );
  }
    

  // addEcrivain(){
  //   this.newEcrivain.genre = this.genres.find(gen => gen.idG == this.newIdG)!;
  //   this.ecrivainService.ajouterEcrivain(this.newEcrivain)
  //   .subscribe(ecriv => {
  //     // console.log(ecriv);
  //     this.router.navigate(['ecrivains']);
  //   });
  // }

  addEcrivain() {
    this.ecrivainService
      .uploadImage(this.uploadedImage, this.uploadedImage.name)
      .subscribe((img: Image) => {
        this.newEcrivain.image = img;
        this.newEcrivain.genre = this.genres.find(gen => gen.idG == this.newIdG)!;
        this.ecrivainService
          .ajouterEcrivain(this.newEcrivain)
          .subscribe(() => {
            this.router.navigate(['ecrivains']);
          });
      });
  }


  onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.uploadedImage);
    reader.onload = (_event) => { this.imagePath = reader.result; }
  }

}
