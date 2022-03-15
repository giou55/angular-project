import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';
import { MessageService } from '../../services/message.service';
import { NameService } from 'src/app/services/name.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() buttons: any;

  constructor(
    private userService: UserService, 
    private postService: PostService, 
    private messageService: MessageService,
    private nameService: NameService) { }

  ngOnInit(): void {
  }

  onActivate() {
    this.userService.activatedEmitter.emit(true);
  }

  onSend() {
    this.messageService.updateMessage.next("Hello from buttons!");
  }

  onPrintName(){
    this.nameService.nameSubject.next("George");
  }

  newPost = `Το post άλλαξε. Αυτό είναι το καινούριο post.Το post άλλαξε. Αυτό είναι το καινούριο post.Το post άλλαξε. 
            Αυτό είναι το καινούριο post.Το post άλλαξε. Αυτό είναι το καινούριο post.Το post άλλαξε. Αυτό είναι το καινούριο post.Το post άλλαξε. 
            Αυτό είναι το καινούριο post.Το post άλλαξε. Αυτό είναι το καινούριο post.Το post άλλαξε. Αυτό είναι το καινούριο post.Το post άλλαξε. 
            Αυτό είναι το καινούριο post.Το post άλλαξε. Αυτό είναι το καινούριο post.`;

  onUpdatePost() {
    this.postService.updatedPost.emit(this.newPost);
  }

  onGetUsers() {
    this.userService.getUsers();
  }

}
