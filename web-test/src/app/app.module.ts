import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { TodoComponent } from "./components/todo/todo.component";
import { ItemsComponent } from "./components/items/items.component";
import { FormsModule } from "@angular/forms";

import { MaterialModule } from "./material-module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ModalComponent } from "./components/modal/modal.component";
// import { ModalContentComponent } from "./components/modal-content/modal-content.component";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ItemsComponent,
    ModalComponent,
    // ModalContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  // entryComponents: [AppComponent]
  entryComponents: [ModalComponent]

})
export class AppModule {}
