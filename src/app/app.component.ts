import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';

  buttons = {
    "button1" : "Activate user",
    "button2" : "Send message",
    "button3" : "Update post",
    "button4" : "Get users",
    "button5" : "Print name"
  };
}
