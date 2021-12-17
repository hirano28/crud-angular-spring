import { catchError, delay } from 'rxjs/operators';
import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { CourseService } from './../service/course.service';
import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Observable<Course[]>;
  displayedColumns = ['name', 'category']

  constructor(
    private courseService: CourseService,
    public dialog: MatDialog
    ) {
    this.courses = courseService.getAll().pipe(
      catchError(error => {
        delay(5000)
        this.onError(error)
        return of([]);
      })
    )
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: 'Deu ruim'
    });
  }

  ngOnInit(): void {
  }

}
