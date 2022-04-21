import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public url: string = "";
  constructor(private http: HttpClient) { }

  register(user: User){
    return this.http.post(this.url, user);
  }
}
