import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';

export const routes: Routes = [
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
  },
  {
    path: 'courses',
    title: 'Meus cursos',
    component: CoursesComponent,
  },
];
