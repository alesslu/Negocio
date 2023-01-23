import { transition } from '@angular/animations';
import { NumberFormatStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { CategoryModel } from '../models/CategoryModel';
import { CategoriesService } from '../services/categories.service';

declare var window: any;

interface modal {
  id: number,
  name: string,
  icon: string,
  type_transaction: string,
  color: string
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})


export class ModalComponent implements OnInit {

  formModal: any;
  
  addCategories: {name: string, icon: string, type_transaction: string, color: string, transactions:[]} = { name:"", icon: "", type_transaction: "", color: "", transactions:[]}
  
  @Output() newCategory: EventEmitter<any> = new EventEmitter();

  public colores: { class: string, color: string, clicked: boolean }[] = [
    { class: 'btn btn-1 btn-circle', color: 'red', clicked: false },
    { class: 'btn btn-2 btn-circle', color: 'orange', clicked: false },
    { class: 'btn btn-3 btn-circle', color: 'lightcoral', clicked: false },
    { class: 'btn btn-4 btn-circle', color: 'green', clicked: false },
    { class: 'btn btn-5 btn-circle', color: 'turquoise', clicked: false },
    { class: 'btn btn-6 btn-circle', color: 'light-blue', clicked: false },
    { class: 'btn btn-7 btn-circle', color: 'blue', clicked: false },
    { class: 'btn btn-8 btn-circle', color: 'gray', clicked: false },
  ]

  public iconos: { icon: string, clicked: boolean }[] = [
    { icon: 'bank', clicked: false },
    { icon: 'cart', clicked: false },
    // { icon: 'healt', clicked: false },
    { icon: 'game', clicked: false },
    { icon: 'education', clicked: false },
    { icon: 'gift', clicked: false },
    { icon: 'car', clicked: false },
    { icon: 'bill', clicked: false },
  ]

  constructor(
    private categoriesService: CategoriesService,
    private http: HttpClient

  ) { }

 
  ngOnInit(): void {

    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
  }
 
  openFormModal() {
    this.formModal.show();
  }
  agregarColor(color:string):void{
    this.addCategories!.color = color
    this.setClickedColor(color);
  }
  agregarIcono(icon:string):void{
    this.addCategories!.icon = icon
    this.setClickedIcon(icon);
  }

  agregarName(name:string):void{
    this.addCategories!.name = name
  }

  saveSomeThing(){
    this.formModal.hide();
    this.newCategory.emit(this.addCategories);

    // para generar id
    // this.categoriesService.getAllCategories().subscribe((data) => {
    //   let numeroInicio: any
    //   let numeroCantidad: any
    //   let numeroResultado: any
    //   numeroInicio = data[0].id
    //   numeroCantidad = data.length 
    //   numeroResultado = numeroInicio + numeroCantidad
    //   this.addCategories! = numeroResultado;
    //   console.log("nuevo",this.addCategories)
    // })

 }

  setClickedColor(color: string) {
    this.colores.forEach((item: any) => {
      item.clicked = false;
    })
    let current = this.colores.filter((x: any) => x.color == color)[0];
    current.clicked = true;
  }

  setClickedIcon(icon: string) {
    this.iconos.forEach((item: any) => {
      item.clicked = false;
    })
    let current = this.iconos.filter((x: any) => x.icon == icon)[0];
    current.clicked = true;
  }

}