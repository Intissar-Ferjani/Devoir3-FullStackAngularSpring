import { Component, model, OnInit } from '@angular/core';
import { Ecrivain } from '../../model/ecrivain.model';
import { EcrivainService } from '../services/ecrivain.service';
import { AuthService } from '../services/auth.service';
import { Image } from '../../model/Image.model';

@Component({
  selector: 'app-ecrivains',
  templateUrl: './ecrivains.component.html', 
  styleUrl: './ecrivains.component.css'
})
export class EcrivainsComponent implements OnInit {

  ecrivains : Ecrivain [] = [];

  constructor(private ecrivainService: EcrivainService, public authService: AuthService) {}
  
  // ngOnInit(): void {
  //   this.ecrivains = this.ecrivainService.listeEcrivains();
  // }
  ngOnInit(): void {
    // this.ecrivainService.listeEcrivains().subscribe(ecrivs => { // -> subscribe pque le type de retour est Observable
    //   console.log(ecrivs);
    //   this.ecrivains = ecrivs;
    // });
    this.chargerEcrivains();
  }

  // chargerEcrivains(){
  //   this.ecrivainService.listeEcrivains().subscribe(ecrivs => {
  //     // console.log(ecrivs);
  //     this.ecrivains = ecrivs;

  //     this.ecrivains.forEach((ecriv) => {
  //       this.ecrivainService
  //         .loadImage(ecriv.image.idImage)
  //         .subscribe((img: Image) => {
  //           ecriv.imageStr = 'data:' + img.type + ';base64,' + img.image;
  //         });
  //     }); 
  //   });
  // }

  chargerEcrivains() {
    this.ecrivainService.listeEcrivains().subscribe(ecrivs => {
      this.ecrivains = ecrivs;
      this.ecrivains.forEach((ecriv) => {
        ecriv.imageStr = 'data:' + ecriv.images[0].type + ';base64,' + ecriv.images[0].image;
      });
    });
  }

  // supprimerEcrivain(e: Ecrivain)
  // {
  //   let conf = confirm("Etes-vous sûr ?");
  //   if (conf){
  //     this.ecrivainService.supprimerEcrivain(e);
  //     // this.ecrivains = this.ecrivainService.listeEcrivains();
  //   }
  // }
  supprimerEcrivain(e: Ecrivain)
  {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.ecrivainService.supprimerEcrivain(e.idEcrivain!).subscribe(() => {
        this.chargerEcrivains();
      });
  }
}
