import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './book/register/register.component';
import { ProjectExplanationComponent } from './project-explanation/project-explanation.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ProjectExplanationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
