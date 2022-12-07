import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './book/register/register.component';
import { ProjectExplanationComponent } from './project-explanation/project-explanation.component';
import { LogoHeaderComponent } from './logo-header/logo-header.component';

@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        ProjectExplanationComponent,
        LogoHeaderComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule
    ]
})
export class AppModule { }
