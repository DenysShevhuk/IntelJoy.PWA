import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
  color = false;
  learnColor = false;
  exerciseColor = false;
  achievement = false;
  wheel = false;
  ngOnInit(): void {
  }

}
