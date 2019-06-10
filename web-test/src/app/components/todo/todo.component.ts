import { Component, OnInit } from "@angular/core";
import { Todo } from "../../models/Todo";
import { TodoService } from "../../services/todo.service";
import { log } from "util";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ModalComponent } from "../modal/modal.component";
import { VERSION } from "@angular/compiler";
@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.sass"]
})
export class TodoComponent implements OnInit {
  todo: Todo[] = [];
  limit: Number;
  loading: boolean = false;
  task: string;
  name: string = `Angular version ${VERSION.full}`;

  constructor(public ts: TodoService, public dialog: MatDialog) {}

  ngOnInit() {
    this.handleFetchTodos();

    this.limit = this.ts.limitNumber;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: "250px",
      data: { name: this.name, task: this.task }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.todo.unshift({
          id: this.todo.length + 1,
          title: result,
          completed: false
        });
      } else {
        console.log("insert task");
      }
    });
  }

  onDelete(id) {
    this.todo = this.todo.filter(el => el.id !== id);
  }

  handleChangeLimit(val) {
    this.ts.changeLimitNumber(val);
  }

  handleFetchTodos() {
    this.loading = true;

    this.ts.getTodos().subscribe(todos => {
      this.todo = todos;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    });
  }

  handleRefresh() {
    this.handleFetchTodos();
  }

  onSubmit() {
    this.handleFetchTodos();
  }
}
