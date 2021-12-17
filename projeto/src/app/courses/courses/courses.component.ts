import { CourseService } from './../service/course.service';
import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Observable<Course[]>;
  displayedColumns = ['name', 'category']

  constructor(courseService: CourseService) {
    this.courses = courseService.getAll();
  }

  ngOnInit(): void {
  }

}
