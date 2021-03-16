import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LessonsComponent} from './learn/lessons/lessons.component';

const routes: Routes = [
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  {path: 'learn/:id', component: LessonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
