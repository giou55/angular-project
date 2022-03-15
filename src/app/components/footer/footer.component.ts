import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { NameService } from '../../services/name.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  name:string = "";

  constructor(private messageService: MessageService, private nameService: NameService) { }

  ngOnInit(): void {
    this.nameService.nameSubject.subscribe(
      name => this.name = name
    )
  }

  onSend() {
    this.messageService.updateMessage.next("Hello from footer!");
  }

}
