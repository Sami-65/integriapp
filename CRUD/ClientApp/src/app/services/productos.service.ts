import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
 private myAppUrl;
  private myApiUrl = 'api/Productos/';

  constructor(private http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    this.myAppUrl = baseUrl;
  }

  getListProducto(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  deleteProducto(id: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }
  saveProducto(producto: any): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, producto);
  }
  updateProducto(id: number, producto: any): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrl + id, producto);
  }
}
