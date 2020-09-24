import { Component, HostBinding, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/empresa';
import { ApiEmpresaService } from 'src/app/services/api-empresa.service';
import {ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresa-form.component.html',
  styleUrls: ['./empresa-form.component.css']
})
export class EmpresaFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  empresa : Empresa ={
    
    nombre: '',
    direccion: '',
    telefono: ''
  };
  
  edit: boolean = false;
  
  constructor(private apiService:ApiEmpresaService, private router: Router,private activeroute: ActivatedRoute) { }

  ngOnInit(){
    const params = this.activeroute.snapshot.params;
    console.log(params);
    if(params.id){
      this.apiService.getOneEmpresa(params.id).subscribe(
        res=>{
          if(res!= null){
            console.log("NGoninit"+res);
            this.empresa = res; // luego ponemos eso
            this.edit = true;

          }else{
            this.router.navigate(['/empresas']);
          }
          
        },
        err => console.log("hay error "+ err)
      )
    }
  }

  saveNewE(){

    
    this.apiService.createEmpresa(this.empresa).subscribe(

      res => {
        console.log("res : "+ res);
        this.empresa.nombre=' ';
        this.empresa.direccion = ' ';
        this.empresa.telefono = ' ';
      },
      err => console.log("err : "+ err)
    );
  }

  updateE(){
    console.log("MetodoActualizar"+this.empresa)

    this.apiService.updateEmpresa(this.empresa.id,this.empresa).subscribe(
      res => {
        console.log("res: "+res);
        this.empresa.nombre=' ';
        this.empresa.direccion = ' ';
        this.empresa.telefono = ' ';
      },
      err => console.log("err: "+err)
    )
    console.log(this.empresa);
  }

}
