import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShapeComponent } from './components/shape/shape.component';
import { SquareComponent } from './components/square/square.component';
import { UsersContainerComponent } from './components/users-container/users-container.component';

const routes: Routes = [
  {
    path: 'square', component: SquareComponent
  },
  {
    path: 'shape', component: ShapeComponent,
  },
  {
    path: 'users', component: UsersContainerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
