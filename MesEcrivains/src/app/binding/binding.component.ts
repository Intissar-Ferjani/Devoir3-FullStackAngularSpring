import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styles: ``
})
export class BindingComponent {

  titre : string = "Apprendre data binding";
  status : boolean = false;
  nom : string = "Intissar Ferjani"

  changerTitre(){
    this.titre = "New Titre";
  }
}
