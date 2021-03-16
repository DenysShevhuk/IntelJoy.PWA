import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Learn {
  id?: string;
  name: string;
  title: string;
  src: string;
}

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {
  learns: Learn[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<Learn[]>('assets/learn.json').subscribe(response => {
      console.log(response);
      this.learns = response;
    });
  }

  // tslint:disable-next-line:typedef
  // getById(id: number) {
  //   return this.learns.find(l => l.id === l);
  // }

}
