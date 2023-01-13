import { Component, OnInit } from '@angular/core';
declare var window: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {
  formModal: any;

  categories = {id:"", name:"", icon:"", type:"", color:""}
    
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
  saveSomeThing(){
    this.formModal.hide();
    console.log(this.categories)
  }
  
  
}
