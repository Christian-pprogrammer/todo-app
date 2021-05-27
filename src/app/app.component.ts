import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  newTodo: any;
  todos:any = [];
  trash="../assets/images/si-delete.svg";
  addTodo(){
    if(this.newTodo){
      this.todos.unshift(this.newTodo);
      this.newTodo = ''
    }
  }
  rub(i: any){
    this.todos.splice(i,1);
  }
  // checked = false;
  clickMe(event: any){
    if(event.target.parentNode.childNodes[1].classList.contains("myclass")){
      event.target.parentNode.childNodes[1].classList.remove("myclass");
    }else{
      event.target.parentNode.childNodes[1].classList.add("myclass");
    }
  }
}
