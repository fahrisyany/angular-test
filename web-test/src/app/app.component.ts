import { Component, Input } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  private _loggedIn: boolean;
  message: string;

  constructor() {}

  get loggedIn() {
    return this._loggedIn;
  }
  // @Input()
  set loggedIn(value: boolean) {
    this._loggedIn = value;
  }
}
