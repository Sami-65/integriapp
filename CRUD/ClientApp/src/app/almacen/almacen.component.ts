import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlmacenService } from '../services/almacen.service';
@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.css']
})
export class AlmacenComponent implements OnInit {
  form: FormGroup;
  listAlmacen: any[] = [];
  b = " Agregar";
  accion = "Agregar Almacen";

  id: number | undefined;

  constructor(private fb: FormBuilder, private _AlmacenService: AlmacenService) {
    this.form = this.fb.group({
      nombre: ["", Validators.required],
      direccion: ["", Validators.required],
      idencargado: ["", Validators.required],
      });
  }

  listarAlmacen() {
    this._AlmacenService.getListAlmacen().subscribe(data => {
      this.listAlmacen = data;
      console.log(data);

    }, error => {
      console.log(error);
    });
  }

  GuardarAlmacen() {
    this.b = "Agregar Almacen";
    const almacen: any = {

      nombre: this.form.get('nombre').value,
      direccion: this.form.get('direccion').value,
      idencargado: this.form.get('idencargado').value,

    }
    if (this.id == undefined) {
      this._AlmacenService.saveAlmacen(almacen).subscribe(data => {
        this.listarAlmacen();
        this.form.reset();
      }, error => {
        console.log(error);
      });
    } else {
      almacen.id = this.id;
      this._AlmacenService.updateAlmacen(this.id, almacen).subscribe(data => {

        this.form.reset();
        this.accion = "Agregar Almacen";
        this.id = undefined;
        this.listarAlmacen();
      }, error => {
        console.log(error);
      })
    }
  }


  EliminarAlmacen(id: number) {
    this._AlmacenService.deleteAlmacen(id).subscribe(data => {
      this.listarAlmacen();
    }, error => {
      console.log(error);
    });
  }
  EditarAlmacen(almacen: any) {
    this.accion = "Editar Almacen";
    this.b = " Actualizar";
    this.id = almacen.id;
    this.form.patchValue({
      nombre: almacen.nombre,
      direccion: almacen.direccion,
      idencargado: almacen.idencargado,
    })  
  }

  ngOnInit() {
    this.listarAlmacen();
  }
}
