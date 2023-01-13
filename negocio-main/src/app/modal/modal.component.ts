import { Component, OnInit, Input, Output } from '@angular/core';

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
  categories = {id:"", name:"", icon:"", type:"", color:""};
  aux=7;
  id=""+this.aux;
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
    this.categories.color = color

  }
  agregarIcono(icon:string):void{
    this.categories.icon = icon

  }

  agregarName(name:string):void{
    this.categories.name = name
    
  }
  saveSomeThing(){
    this.formModal.hide();
    this.categories.id = this.id;
    console.log(this.categories)
    this.aux++;
    this.id=""+this.aux;
  }
  
  
}
