import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../model/user';

const url = 'http://localhost:3000/api/users';

@Injectable()
export class DadosService {

  constructor(@Injectable() private http: HttpClient) { }


  getUser() {
    return this.http.get(url);
  }

  postUser(user:Users){
    console.log(user);
    try {

      return this.http.post(url,user,{ observe: 'response' });
    } catch (error) {
      console.log(error);
    }
  }
}
