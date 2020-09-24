import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { EmpresaIndexComponent } from './components/empresa-index/empresa-index.component';
import { EmpresaFormComponent } from './components/empresa-form/empresa-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiEmpresaService } from './services/api-empresa.service';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EmpresaIndexComponent,
    EmpresaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule


  ],
  providers: [
    ApiEmpresaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
