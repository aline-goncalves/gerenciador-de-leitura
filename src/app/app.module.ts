import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './book/register/register.component';
import { ProjectExplanationComponent } from './project-explanation/project-explanation.component';
import { LogoHeaderComponent } from './logo-header/logo-header.component';
import { ProjectFooterComponent } from 'src/app/project-footer/project-footer.component';
import { FormLoginComponent } from 'src/app/form-login/form-login.component';
import { ProjectButtonComponent } from './project-button/project-button.component';

@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        ProjectExplanationComponent,
        LogoHeaderComponent,
        ProjectFooterComponent,
        FormLoginComponent,
        ProjectButtonComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ]
})
export class AppModule { }
