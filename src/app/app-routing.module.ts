import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BindeoComponent } from './componentes/bindeo/bindeo.component';
import { ErrorComponent } from './componentes/error/error.component'; 
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
	{path: "", component: BienvenidoComponent}, //si en path se deja vacio, se direcciona a esa vista por default
	{path: "bindeo", component: BindeoComponent},
	{path: "login", component: LoginComponent},
	{path: "**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
