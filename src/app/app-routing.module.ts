import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControllerComponent } from './components/controller/controller.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ControllerComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
