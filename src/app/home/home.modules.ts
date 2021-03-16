import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MenuModules} from '../menu/ menu.modules';
import {HomeComponent} from './components/home/home.component';
import {CommonModule} from '@angular/common';
import {LearnComponent} from './components/learn/learn.component';
import {ExerciseComponent} from './components/exercise/exercise.component';
import {AchievementComponent} from './components/achievement/achievement.component';
import {ParkComponent} from './components/park/park.component';


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild([
    {path: 'home', component: HomeComponent},
    {path: 'learn', component: LearnComponent},
    {path: 'exercise', component: ExerciseComponent},
    {path: 'login', loadChildren: './login/login.module#LoginModule'},
    {path: 'achievement', component: AchievementComponent},
    {path: 'park', component: ParkComponent}
  ]), MenuModules, CommonModule],
  exports: [RouterModule]
})
export class HomeModule {
}
