import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students.component'; // Import StudentsComponent

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent // Declare StudentsComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }