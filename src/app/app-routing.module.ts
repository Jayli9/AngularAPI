import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaFormComponent } from './components/empresa-form/empresa-form.component';
import { EmpresaIndexComponent} from './components/empresa-index/empresa-index.component';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
  {path:'', redirectTo:'/empresas', pathMatch:'full'},
  {path:'empresas', component:EmpresaIndexComponent },
  {path:'empresas/form', component:EmpresaFormComponent },
  {path:'empresas/edit/:id', component:EmpresaFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
