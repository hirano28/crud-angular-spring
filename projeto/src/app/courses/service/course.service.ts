import { Course } from './../model/course';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private API_URL = ''

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Course[]> {
    return this.httpClient.get<Course[]>('http://localhost:3000/courses').pipe(
      tap(course => {console.log(course)}),
    )
  }
}
