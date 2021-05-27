import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class CounterService {
    count = 3;
    // tslint:disable-next-line:typedef
    increase(){
        this.count ++;
        if (this.count === 6){
            this.count = 1;
        }
    }
    // tslint:disable-next-line:typedef
    decrease(){
        this.count--;
        if (this.count === 0){
            this.count = 5;
        }
    }
}
