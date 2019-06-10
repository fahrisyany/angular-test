import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "../../models/Todo";
// import { EventEmitter } from 'events';
@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.sass"]
})
export class ItemsComponent implements OnInit {
  @Input() el: Todo;
  @Input() name: string;
  @Output() onDelete: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  setClasses() {
    let Classes = {
      el: true,
      "is-complete": this.el.completed
    };

    return Classes;
  }

  onToggle(el) {
    el.completed = !el.completed;
  }

  onDeleteTask(id) {
    this.onDelete.emit(id);
  }
}
