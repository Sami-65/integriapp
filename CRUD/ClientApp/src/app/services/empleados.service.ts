import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  private myAppUrl;
  private myApiUrl = 'api/Empleados/';

  constructor(private http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    this.myAppUrl = baseUrl;
  }

  getListEmpleados(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  deleteEmpleados(id: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }
  saveEmpleados(empleado: any): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, empleado);
  }
  updateEmpleados(id: number, empleado: any): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrl + id, empleado);
  }
}
