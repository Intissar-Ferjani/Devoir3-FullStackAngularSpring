import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcrivainsComponent } from './ecrivains/ecrivains.component';
import { AddEcrivainComponent } from './add-ecrivain/add-ecrivain.component';
import { UpdateEcrivainComponent } from './update-ecrivain/update-ecrivain.component';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeGenresComponent } from './liste-genres/liste-genres.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './services/forbidden/forbidden.component';
import { EcrivainGuard } from './services/ecrivain.guard';
import { RegisterComponent } from './register/register.component';
import { VerifEmailComponent } from './verif-email/verif-email.component';


const routes: Routes = [
  {path : "ecrivains" , component : EcrivainsComponent},
  {path : "add-ecrivain" , component : AddEcrivainComponent , canActivate:[EcrivainGuard]},
  {path: "", redirectTo: "ecrivains", pathMatch: "full" },
  {path: "updateEcrivain/:id", component: UpdateEcrivainComponent},
  {path: "rechercheParGenre", component : RechercheParGenreComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listeGenres", component : ListeGenresComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path:'register',component:RegisterComponent},
  {path: 'verifEmail', component: VerifEmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
