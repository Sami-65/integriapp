import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadosService } from '../services/empleados.service';
@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  form: FormGroup;
  listEmpleados: any[] = [];
  b = " Agregar";
  accion = "Agregar Empleados";

  id: number | undefined;

  constructor(private fb: FormBuilder, private _EmpleadosService: EmpleadosService) {
    this.form = this.fb.group({
      nombre: ["", Validators.required],
      puesto: ["", Validators.required],
      salario: ["", Validators.required],
      });
  }

  listarEmpleados() {
    this._EmpleadosService.getListEmpleados().subscribe(data => {
      this.listEmpleados = data;
      console.log(data);

    }, error => {
      console.log(error);
    });
  }

  GuardarEmpleados() {
    this.b = "Agregar Empleados";
    const empleado: any = {

      nombre: this.form.get('nombre').value,
      puesto: this.form.get('puesto').value,
      salario: this.form.get('salario').value,
      
    }
    if (this.id == undefined) {
      this._EmpleadosService.saveEmpleados(empleado).subscribe(data => {
        this.listarEmpleados();
        this.form.reset();
      }, error => {
        console.log(error);
      });
    } else {
      empleado.id = this.id;
      this._EmpleadosService.updateEmpleados(this.id, empleado).subscribe(data => {

        this.form.reset();
        this.accion = "Agregar Empleados";
        this.id = undefined;
        this.listarEmpleados();
      }, error => {
        console.log(error);
      })
    }
  }


  EliminarEmpleados(id: number) {
    this._EmpleadosService.deleteEmpleados(id).subscribe(data => {
      this.listarEmpleados();
    }, error => {
      console.log(error);
    });
  }
  EditarEmpleados(empleado: any) {
    this.accion = "Editar Empleados";
    this.b = " Actualizar";
    this.id = empleado.id;
    this.form.patchValue({
      nombre: empleado.nombre,
      puesto: empleado.puesto,
      salario: empleado.salario
     
    })
  }

  ngOnInit() {
    this.listarEmpleados();
  }
}
