import {Component, OnInit} from '@angular/core';
import { NameService } from 'src/app/services/name.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  active = 1;
  name:string = "";

  constructor(private messageService: MessageService, private nameService: NameService) { }

  ngOnInit(): void {
    this.nameService.nameSubject.subscribe(
      name => this.name = name
    )
  }

  onSend() {
    this.messageService.updateMessage.next("Hello from menu!");
  }
}
