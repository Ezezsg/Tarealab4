import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindeo',
  templateUrl: './bindeo.component.html',
  styleUrls: ['./bindeo.component.css']
})
export class BindeoComponent implements OnInit {

  public ejemplo = "hola";
  public ejemplo2 = "";
  public ejemplo3 = "";	

  public edadUno:number = 0;
  public edadDos:number = 0; 
  public suma:number = 0;
  public promedio:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  pruebaClick(){
  	this.ejemplo3 = "Se ejecuto el evento";
  }

  calcular(){
    this.suma = Number.parseFloat(this.edadUno.toString()) + Number.parseFloat(this.edadDos.toString());
    this.promedio = (Number.parseFloat(this.edadUno.toString()) + Number.parseFloat(this.edadDos.toString()))/2;
  }

  limpiar(){
    this.edadUno = 0;
    this.edadDos = 0;
    this.suma = 0;
    this.promedio = 0; 
  }
}
