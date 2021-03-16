import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginModule} from './login/login.module';
import {ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './menu/components/footer/footer.component';
import { HeaderComponent } from './menu/components/header/header.component';
import { HomeComponent } from './home/components/home/home.component';
import {LearnComponent} from './home/components/learn/learn.component';
import { ExerciseComponent } from './home/components/exercise/exercise.component';
import { AchievementComponent } from './home/components/achievement/achievement.component';
import { ParkComponent } from './home/components/park/park.component';
import {HomeModule} from './home/home.modules';
import {LessonsComponent} from './learn/lessons/lessons.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LearnComponent,
    HomeComponent,
    ExerciseComponent,
    AchievementComponent,
    ParkComponent,
    LessonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LoginModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
