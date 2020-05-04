import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'madlibs';
  lunch:string = "noodles"
  noun:string = ""
  verb:string = ""
  who:string = ""
  why:string = ""
  where:string = ""
}
