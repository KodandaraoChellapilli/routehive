import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Master {
  apiUrl: string = 'http://localhost:3000/api/locations';

  constructor(private http: HttpClient) {}
}
