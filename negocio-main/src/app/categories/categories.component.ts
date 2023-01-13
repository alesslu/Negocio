import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  cards = [{id:"1", name:"Rent", icon:"fa fa-university", type:"volador", color:"borde-9"},
  {id:"2", name:"Groceries", icon:"fas fa-shopping-cart", type:"papel", color:"borde-6"},
  {id:"3", name:"Transport", icon:"fas fa-car", type:"papel", color:"borde-2"},
  {id:"4", name:"Health", icon:"fas fa-medkit", type:"papel", color:"borde-1"},
  {id:"4", name:"Gifts", icon:"fas fa-gift", type:"papel", color:"borde-10"},
  {id:"4", name:"Education", icon:"fa-solid fa-book", type:"papel", color:"borde-7"}]

  name: string ="Rent"




}
