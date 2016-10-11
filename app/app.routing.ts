import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CardsComponent} from './cards/cards.component';
export const appRoutes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'cards', component:CardsComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

