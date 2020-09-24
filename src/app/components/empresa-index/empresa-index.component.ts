import { Component, HostBinding, OnInit } from '@angular/core';
import { ApiEmpresaService } from '../../services/api-empresa.service';

@Component({
  selector: 'app-empresa-index',
  templateUrl: './empresa-index.component.html',
  styleUrls: ['./empresa-index.component.css']
})
export class EmpresaIndexComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  empresas: any = [];

  constructor(private empresaService: ApiEmpresaService) {

  }

  ngOnInit() {
    this.getEmpresas();

  }

  getEmpresas() {
    
    this.empresaService.getAllEmpresas().subscribe(
      (data) => {
        this.empresas = data;
      }, (err) => console.log(err)

    );
  }

  borrarE(id: number) {
      this.empresaService.deleteEmpresa(id).subscribe(
        res => {

          console.log("res: "+res);
          this.getEmpresas();
        },
        err => console.log("err: "+err)
      )

      // console.log(id)
    }

  
}
