import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private http: HttpClient) { }

    getUsers() {
        this.http.get('https://ertdev1.oryx.gr/wp-json/wp/v2/users')
            .pipe(map(data => {
                const usersArray = [];
                for (const key in data) {
                    usersArray.push( {...data });
                }
                return usersArray;
            }))
            .subscribe(users => {
                console.log(users);
            });
    }

    activatedEmitter = new EventEmitter<any>();

}