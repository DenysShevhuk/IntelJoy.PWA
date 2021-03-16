import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
export interface Favorite {
  id?: string;
  title: string;
  text: string;
  src: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  favorites: Favorite[] = [];
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<Favorite[]>('assets/favorites.json').subscribe(response => {
      console.log(response);
      this.favorites = response;
    });
  }

}
