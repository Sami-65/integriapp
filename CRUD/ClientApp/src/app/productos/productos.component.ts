import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from '../services/productos.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  form: FormGroup;
  listProducto: any[] = [];
  b = " Agregar";
  accion = "Agregar Producto";

  id: number | undefined;

  constructor(private fb: FormBuilder, private _ProductosService: ProductosService) {
    this.form = this.fb.group({
      nombre: ["", Validators.required],
      precio: ["", Validators.required],
      cantidad: ["", Validators.required],
      registro: ["", Validators.required],
      idalmacen: ["", Validators.required],
    });
  }

  listarProductos() {
    this._ProductosService.getListProducto().subscribe(data => {
      this.listProducto = data;
      console.log(data);

    }, error => {
      console.log(error);
    });
  }

  GuardarProducto() {
    this.b = "Agregar Producto";
    const producto: any = {

      nombre: this.form.get('nombre').value,
      precio: this.form.get('precio').value,
      cantidad: this.form.get('cantidad').value,
      registro: this.form.get('registro').value,
      idalmacen: this.form.get('idalmacen').value,

    }
    if (this.id == undefined) {
      this._ProductosService.saveProducto(producto).subscribe(data => {
        this.listarProductos();
        this.form.reset();
      }, error => {
        console.log(error);
      });
    } else {
      producto.id = this.id;
      this._ProductosService.updateProducto(this.id, producto).subscribe(data => {

        this.form.reset();
        this.accion = "Agregar Producto";
        this.id = undefined;
        this.listarProductos();
      }, error => {
        console.log(error);
      })
    }
  }


  EliminarProducto(id: number) {
    this._ProductosService.deleteProducto(id).subscribe(data => {
      this.listarProductos();
    }, error => {
      console.log(error);
    });
  }
  EditarProducto(producto: any) {
    this.accion = "Editar producto";
    this.b = " Actualizar";
    this.id = producto.id;
    this.form.patchValue({
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad: producto.cantidad,
      registro: producto.registro,
      idalmacen: producto.idalmacen
    })
  }

  ngOnInit() {
    this.listarProductos();
  }
}
