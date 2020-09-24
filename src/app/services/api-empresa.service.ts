import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empresa } from '../models/empresa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiEmpresaService {

  API = "https://api-jayli-empresa.herokuapp.com/empresas";

  constructor(private http: HttpClient) {

  }
  getAllEmpresas() {
    return this.http.get(`${this.API}/`);
  }

  getOneEmpresa(id: number) {
    return this.http.get(`${this.API}/${id}/`);
  }

  createEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.http.post(`${this.API}/`, empresa);
  }
  deleteEmpresa(id: number) {
    return this.http.delete(`${this.API}/${id}/`);
    // return this.http.delete(this.API+'/'+id+'/');
  }
  updateEmpresa(id: number, updateEmpresa: Empresa):Observable<Empresa> {
    return this.http.put(`${this.API}/${id}/`, updateEmpresa);

  }
}
