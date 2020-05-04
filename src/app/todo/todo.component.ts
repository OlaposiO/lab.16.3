import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
list: Todo[]= [
  {
  task:"fold clothes",
  completed:false,
  editing:false,
},
{
  task: "Put clothes away",
completed:false,
editing:false,
},
{
  task: "relax",
  completed:false,
  editing:false,
},
{
  task: "try to pet my cat",
  completed:true,
  editing:false,
},
{
  task: "pet dog",
  completed:false,
  editing:false,
},
{
  task: "be awesome",
  completed:false,
  editing:false,
},
]

show: boolean =true


constructor() { }

ngOnInit(): void {
}
completeTask(todoCompleted){
  todoCompleted.completed= !todoCompleted.completed
}
removeTask(todo){
  this.list=this.list.filter(i=>i.task !==todo.task)
}

newList='';
addTask(newList){
    
    this.list.push({task:newList,completed:false,editing:false,});
    this.newList='';
  }

  filterText: string = "";

  findList: string= "";
  filterList():any {
    if(this.filterText.trim()) {
      return this.list;
    }
      const match = this.filterText.trim().toLocaleLowerCase();
      return this.list.filter(list => list.task.toLowerCase().includes(match));
  }


editList(todo: Todo): void{
  this.list = this.list.filter(todo => todo.task !== todo.task)
}


}



