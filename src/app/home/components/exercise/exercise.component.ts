import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
export interface Learn {
  id?: string;
  name: string;
  title: string;
  src: string;
}
export interface Favorite {
  id?: string;
  title: string;
  text: string;
  src: string;
  width: number;
}
@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})

export class ExerciseComponent implements OnInit {
  learns: Learn[] = [];
  favorites: Favorite[] = [];
  toggle = false;
  show = 1;
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<Learn[]>('assets/learn.json').subscribe(response => {
      console.log(response);
      this.learns = response;
    });
    this.http.get<Favorite[]>('assets/exercise.json').subscribe(response => {
      console.log(response);
      this.favorites = response;
    });
  }
  // tslint:disable-next-line:typedef
  increaseShow() {
    this.show += 20;
  }

}
