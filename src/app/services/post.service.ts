import { Injectable, EventEmitter } from "@angular/core";

@Injectable({providedIn: 'root'})
export class PostService {
updatedPost = new EventEmitter<any>();

}