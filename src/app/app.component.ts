import { Component } from '@angular/core';

interface TodoItem {
  title: string;
  description:string;
  date: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  todoItem: string = '';
  
  listofTodos: TodoItem[]=[];
  
  addToTodoList= ()=>{
    this.listofTodos.push({title: this.todoItem ,description:this.todoItem ,date: new Date()});
  }
  deleteItem= (indexofTheItem: number)=>{
    this.listofTodos.splice(indexofTheItem,1);
  }
}
