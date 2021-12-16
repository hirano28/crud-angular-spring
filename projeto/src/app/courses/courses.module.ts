import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatTableModule
  ]
})
export class CoursesModule { }
