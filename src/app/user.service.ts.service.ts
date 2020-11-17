import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceTs{
  baseurl:string = "http://localhost:8080/api/users/"

  constructor() { }
  private http: HttpClient
}
