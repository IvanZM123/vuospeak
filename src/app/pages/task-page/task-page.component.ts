// Imports modules
import { Component, OnInit } from '@angular/core';

// Imports ngrx-store
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';

// Imports models
import { IStore } from 'src/app/ngrx-store';
import { selectAll } from "src/app/ngrx-store/tasks/task.reducer";

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html'
})
export class TaskPageComponent implements OnInit {
  tasks: Observable<any>;

  constructor(
    private store: Store<IStore>
  ) {
    this.tasks = this.store.select(selectAll);
  }

  ngOnInit(): void {
  }
}
