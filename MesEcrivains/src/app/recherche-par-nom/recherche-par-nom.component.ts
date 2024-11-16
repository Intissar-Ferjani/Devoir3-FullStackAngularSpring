import { Component, OnInit } from '@angular/core';
import { EcrivainService } from '../services/ecrivain.service';
import { Ecrivain } from '../../model/ecrivain.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrl: './recherche-par-nom.component.css'
})
export class RechercheParNomComponent implements OnInit {

  ecrivains! : Ecrivain[];
  nomEcrivain! : string;

  allEcrivains! : Ecrivain[];
  searchTerm!: string;
 
  constructor(private ecrivainService : EcrivainService, public authService: AuthService){};
  
  ngOnInit(): void {
    this.ecrivainService.listeEcrivains().subscribe(ecrivs => {
    // console.log(ecrivs);
    // this.allEcrivains = ecrivs;
    this.ecrivains = ecrivs;
    });
  }

  rechercherEcrivs(){
    this.ecrivainService.rechercherParNom(this.nomEcrivain).
    subscribe(ecrivs => {
      this.ecrivains = ecrivs;
      // console.log(ecrivs)
    });
  }

  onKeyUp(filterText : string){
    this.ecrivains = this.allEcrivains.filter(item =>
      item.nomEcrivain!.toLowerCase().includes(filterText)
    );
  }
    

}
