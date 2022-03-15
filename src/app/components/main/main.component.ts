import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { PostService } from '../../services/post.service';
import { MessageService } from '../../services/message.service';
import { NameService } from 'src/app/services/name.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  userActivated = false;
  message = "";
  post: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestiae dicta amet quae nihil 
                  tempore nesciunt reiciendis, temporibus nam corrupti deleniti ipsum impedit magnam, earum, nisi obcaecati. 
                  Asperiores, minima repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt 
                  recusandae facere quia voluptas, architecto quasi quis dignissimos non reiciendis iure iste corporis ad provident 
                  repellat harum! Nam, accusamus atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum animi quidem 
                  laboriosam placeat earum veniam possimus quia cum, similique illum unde cupiditate architecto rem modi voluptatem 
                  debitis enim. Cupiditate, quis?`;

  newpost:string = "";
  name:string = "";

  constructor(
    private userService: UserService, 
    private postService: PostService, 
    private messageService: MessageService,
    private nameService: NameService) { }

  ngOnInit(): void {
    this.userService.activatedEmitter.subscribe(doActivate => {
      this.userActivated = doActivate;
    });

    this.messageService.updateMessage.subscribe(message => {
      this.message = message;
    });

    this.postService.updatedPost.subscribe(post => {
      this.post = post;
    });

    this.nameService.nameSubject.subscribe(
      name => this.name = name
    )
  }
}
