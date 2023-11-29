import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesteRouteComponent } from './components/teste-route/teste-route.component';
import { HomeComponent } from './pages/home/home.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { ContatoComponent } from './pages/contato/contato.component';

const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch:'full'},
  {path:'cardapio', component: CardapioComponent, pathMatch:'full'},
  {path:'contato', component: ContatoComponent, pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
