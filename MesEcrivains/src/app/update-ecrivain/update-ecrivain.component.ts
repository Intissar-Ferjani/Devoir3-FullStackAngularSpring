import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EcrivainService } from '../services/ecrivain.service';
import { Ecrivain } from '../../model/ecrivain.model';
import { Genre } from '../../model/Genre.model';
import { Observable } from 'rxjs';
import { Image } from '../../model/Image.model';

@Component({
  selector: 'app-update-ecrivain',
  templateUrl: './update-ecrivain.component.html'
})

export class UpdateEcrivainComponent implements OnInit {

  currentEcrivain = new Ecrivain();

  genres! : Genre[];
  updatedIdG! : number;

  myImage! : string;

  uploadedImage!: File;
  isImageUpdated: Boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private router :Router, private ecrivainService: EcrivainService) { }

  // ngOnInit(): void {
  //   // this.genres = this.ecrivainService.listeGenres();
  //   this.currentEcrivain = this.ecrivainService.consulterEcrivain(this.activatedRoute.snapshot. params['id']);
  //   // this.updatedIdG = this.currentEcrivain.genre.idG;
  // }
  
  // ngOnInit(): void {
  //   this.ecrivainService.listeGenres().
  //     subscribe(gens => {
  //       // console.log(gens);
  //       this.genres = gens._embedded.genres;
  //     }
  //     );
  //   this.ecrivainService.consulterEcrivain(this.activatedRoute.snapshot.params['id']).
  //     subscribe(ecriv => {
  //       this.currentEcrivain = ecriv;
  //       this.updatedIdG = this.currentEcrivain.genre.idG;

  //       this.ecrivainService
  //         .loadImage(this.currentEcrivain.image.idImage)
  //         .subscribe((img: Image) => {
  //           this.myImage = 'data:' + img.type + ';base64,' + img.image;
  //         }); 
  //     });
  // }

  ngOnInit(): void {
    this.ecrivainService.listeGenres().
      subscribe(gens => {
        // console.log(gens);
        this.genres = gens._embedded.genres;
      }
      );
    this.ecrivainService.consulterEcrivain(this.activatedRoute.snapshot.params['id']).
      subscribe(ecriv => {
        this.currentEcrivain = ecriv;
        this.updatedIdG = this.currentEcrivain.genre.idG;
      });
  }

      
  // updateEcrivain() {
  //   this.currentEcrivain.genre = this.genres.find(gen => gen.idG == this.updatedIdG)!;
  //   if (this.isImageUpdated) {
  //     this.ecrivainService
  //       .uploadImage(this.uploadedImage, this.uploadedImage.name)
  //       .subscribe((img: Image) => {
  //         this.currentEcrivain.image = img;
  //         this.ecrivainService
  //           .updateEcrivain(this.currentEcrivain)
  //           .subscribe((ecriv) => {
  //             this.router.navigate(['ecrivains']);
  //           });
  //       });
  //   }
  //   else {
  //     this.ecrivainService.updateEcrivain(this.currentEcrivain).subscribe(ecriv => {
  //       this.router.navigate(['ecrivains']);
  //     });
  //   }
  // }

  updateEcrivain() {
    this.currentEcrivain.genre = this.genres.find(gen => gen.idG == this.updatedIdG)!;
    this.ecrivainService.updateEcrivain(this.currentEcrivain).subscribe(ecriv => {
      this.router.navigate(['ecrivains']);
    });
  }

  onImageUpload(event: any) {
    if (event.target.files && event.target.files.length) {
      this.uploadedImage = event.target.files[0];
      this.isImageUpdated = true;
      const reader = new FileReader();
      reader.readAsDataURL(this.uploadedImage);
      reader.onload = () => { this.myImage = reader.result as string; };
    }
  }

  // onAddImageEcrivain() {
  //   this.ecrivainService.uploadImageEcriv(this.uploadedImage, this.uploadedImage.name, this.currentEcrivain.idEcrivain)
  //     .subscribe((img: Image) => {
  //       this.currentEcrivain.images.push(img);
  //     });
  // }

  onAddImageEcrivain() {
    if (this.currentEcrivain.idEcrivain !== undefined) {
      this.ecrivainService.uploadImageEcriv(this.uploadedImage, this.uploadedImage.name, this.currentEcrivain.idEcrivain)
        .subscribe((img: Image) => {
          this.currentEcrivain.images.push(img);
        });
    } else {
      console.error('idEcrivain is undefined');
    }
  }

  supprimerImage(img: Image) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.ecrivainService.supprimerImage(img.idImage).subscribe(() => {
        //supprimer image du tableau currentProduit.images
        const index = this.currentEcrivain.images.indexOf(img, 0);
        if (index > -1) {
          this.currentEcrivain.images.splice(index, 1);
        }
      });
  }
    

}


