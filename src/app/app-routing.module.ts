import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { MaterialDidaticoComponent } from './pages/material-didatico/material-didatico.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: "login", },

  { path:'login', component: LoginComponent },
  { path:'main', component: MainComponent },
  { path:'material-didatico', component: MaterialDidaticoComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
