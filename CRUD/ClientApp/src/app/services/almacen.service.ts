import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AlmacenService {
  private myAppUrl;
  private myApiUrl = 'api/Almacen/';

  constructor(private http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    this.myAppUrl = baseUrl;
  }

  getListAlmacen(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  deleteAlmacen(id: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }
  saveAlmacen(almacen: any): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, almacen);
  }
  updateAlmacen(id: number, almacen: any): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrl + id, almacen);
  }
}
