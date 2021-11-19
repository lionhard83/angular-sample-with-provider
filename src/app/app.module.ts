import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShapeComponent } from './components/shape/shape.component';
import { SquareComponent } from './components/square/square.component';
import { FormsModule } from '@angular/forms';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { UsersContainerComponent } from './components/users-container/users-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ShapeComponent,
    SquareComponent,
    SingleUserComponent,
    UsersContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
