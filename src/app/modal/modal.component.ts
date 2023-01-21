import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';

declare var window: any;

interface modal {
  id: number,
  name: string,
  icon: string,
  type: string,
  color: string
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})


export class ModalComponent implements OnInit {

  formModal: any;
  categories: {id: string, name: string, icon: string, type: string, color: string} = {id: "", name: "", icon: "", type: "", color: ""};
  aux=7;
  id=""+this.aux;
  @Output() newCategory: EventEmitter<any> = new EventEmitter();

  public colores: { class: string, color: string, clicked: boolean }[] = [
    { class: 'btn btn-1 btn-circle', color: 'borde-1', clicked: false },
    { class: 'btn btn-2 btn-circle', color: 'borde-2', clicked: false },
    { class: 'btn btn-3 btn-circle', color: 'borde-3', clicked: false },
    { class: 'btn btn-4 btn-circle', color: 'borde-4', clicked: false },
    { class: 'btn btn-5 btn-circle', color: 'borde-5', clicked: false },
    { class: 'btn btn-6 btn-circle', color: 'borde-6', clicked: false },
    { class: 'btn btn-7 btn-circle', color: 'borde-7', clicked: false },
    { class: 'btn btn-8 btn-circle', color: 'borde-8', clicked: false },
  ]

  public iconos: { icon: string, clicked: boolean }[] = [
    { icon: 'fa fa-university', clicked: false },
    { icon: 'fas fa-shopping-cart', clicked: false },
    { icon: 'fas fa-medkit', clicked: false },
    { icon: 'fas fa-gamepad', clicked: false },
    { icon: 'fas fa-graduation-cap', clicked: false },
    { icon: 'fas fa-gift', clicked: false },
    { icon: 'fas fa-car', clicked: false },
    { icon: 'fa-solid fa-book', clicked: false },
  ]

  constructor() {}

 
  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
  }
 
  openFormModal() {
    this.formModal.show();
  }
  agregarColor(color:string):void{
    this.categories!.color = color
    this.setClickedColor(color);
  }
  agregarIcono(icon:string):void{
    this.categories!.icon = icon
    this.setClickedIcon(icon);
  }

  agregarName(name:string):void{
    this.categories!.name = name
    
  }
  saveSomeThing(){
    this.formModal.hide();
    this.categories!.id = this.id;
    this.aux++;
    this.id=""+this.aux;
    this.newCategory.emit(this.categories);
    this.categories = {id: "", name: "", icon: "", type: "", color: ""};
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