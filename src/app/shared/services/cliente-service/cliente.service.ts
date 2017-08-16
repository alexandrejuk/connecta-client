import { Observable } from 'rxjs/Rx';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

import { Cliente } from './../../../models';


@Injectable()
export class ClienteService {

  private url: string = 'http://localhost:3000/clientes';


  constructor(private _http: Http) { }

  retornarTodos(cnpjCpf?: any): Observable <Cliente[]> {
    
    return this._http
      .get(this.url, { params: { cnpj_cpf: cnpjCpf } })
      .map(res => res.json() as Cliente[])
      .catch((error: any) => Observable
      .throw(error.json().error || 'Ocorreu um erro'));
  }

  retornarUm(id): Observable <Cliente> {
    return this._http
      .get(`${this.url}${id}`)
      .map(res => res.json() as Cliente)
      .catch((error: any) => Observable
      .throw(error.json().error || 'Ocorreu um erro'));
  }

  novo(cliente: Cliente): Observable <Cliente> {
    const headers = new Headers({ 'Content-Type' : 'application/json' });
    const options = new RequestOptions({ headers });

    return this._http
    .post(this.url, cliente, options)
    .map(res => res.json() as Cliente)
    .catch((error: any) => Observable
    .throw(error.json().error || 'Ocorreu um erro'));
  }

  atualizar(cliente): Observable <Cliente> {
    const headers = new Headers({ 'Content-Type' : 'application/json' });
    const options = new RequestOptions({ headers });
  
    return this._http
    .put(`${this.url}${cliente.id}`, cliente, options)
    .map(res => res.json() as Cliente)
    .catch((error: any) => Observable
    .throw(error.json().error || 'Ocorreu um erro'));
  }
}