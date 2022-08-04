import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  couldDoTask: Task;
  shouldDoTask: Task;
  mustDoTask: Task;

  constructor() {
    this.couldDoTask = {name: "", completed: false, color: 'primary'};
    this.shouldDoTask = {name: '', completed: false, color: 'primary'};
    this.mustDoTask = {name: '', completed: false, color: 'primary'};
  }

  ngOnInit(): void {
    
  }

  could: Task[] = [
    {name: 'Fall asleep', completed: false, color: 'primary'},
    {name: 'Pick up groceries', completed: false, color: 'primary'},
    {name: 'Go home', completed: false, color: 'primary' }
  ];
  should: Task[] = [
    {name: 'Get up', completed: false, color: 'primary'},
    {name: 'Brush teeth', completed: false, color: 'primary'},
    {name: 'Take a shower', completed: false, color: 'primary'}
  ];
  must: Task[] = [
    {name: 'Priority task', completed: false, color: 'primary'},
    {name: 'Check e-mail', completed: false, color: 'primary'},
    {name: 'Get to work', completed: false, color: 'primary'}
  ];

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  addTask(task: Task, priority: string){
    if(priority === 'could' && this.couldDoTask.name != ''){
      this.could.push(JSON.parse(JSON.stringify(task)));
      this.couldDoTask.name = '';
    }
    if(priority === 'should' && this.shouldDoTask.name != ''){
      this.should.push(JSON.parse(JSON.stringify(task)));
      this.shouldDoTask.name = '';
    }
    if(priority === 'must' && this.mustDoTask.name != ''){
      this.must.push(JSON.parse(JSON.stringify(task)));
      this.mustDoTask.name = '';
    }
  }

}
