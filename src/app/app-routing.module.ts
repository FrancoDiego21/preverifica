import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaglietteComponent } from './magliette/magliette.component';
import { ScarpeComponent } from './scarpe/scarpe.component';

const routes: Routes = [
  { path: 'magliette', component: MaglietteComponent},
  { path: 'scarpe', component: ScarpeComponent},
  { path : '' , redirectTo: '/scarpe', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
