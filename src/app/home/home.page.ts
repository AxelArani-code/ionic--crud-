import { Component } from '@angular/core';
//IMportar
import { TaskService } from '.././services/task.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private taskService: TaskService) {}

  getAllTasks() {
  this.taskService.getAllTasks()
  .subscribe(todos => {
    console.log(todos);
  });
}


getTask() {
  this.taskService.getTask('1')
  .subscribe(todo => {
    console.log(todo);
  });
}
createTask() {
  const task = {
    id: '12',
    userId: '1',
    title: 'change title',
    completed: true
  };
  this.taskService.createTask(task)
  .subscribe((newTask) => {
    console.log(newTask);
  });
}



updateTask() {
  const task = {
    id: '200',
    userId: '1',
    title: 'por otro titulo',
    completed: true
  };
  this.taskService.updateTask(task)
  .subscribe(todo => {
    console.log(todo);
  });
}

deleteTask() {
  this.taskService.deleteTask('1')
  .subscribe((data) => {
    console.log(data);
  });
}
  
}
