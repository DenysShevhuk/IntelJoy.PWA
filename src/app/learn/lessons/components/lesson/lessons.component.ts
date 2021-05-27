import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FavoriteServices, Learn} from '../../home/services/favorite.services';
import {HttpClient} from '@angular/common/http';
import {Favorite} from '../../home/components/achievement/achievement.component';


@Component({
    selector: 'app-lessons',
    templateUrl: './lessons.component.html',
    styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {
    // @ts-ignore
    learn: Learn;
    // @ts-ignore
    favorites: Favorite [] = [
        {title: 'Набір чисел 1-4', src: './assets/icon/agenda_100.svg', id: '1'},
        {title: 'Набір чисел 5-9', src: './assets/icon/agenda_80.svg', id: '2'},
        {title: 'Просте додавання 5', src: './assets/icon/agenda_started.svg', id: '3'},
        {title: 'Просте додавання 6', src: './assets/icon/agenda_disabled.svg', id: '4'},
        {title: 'Просте додавання 7', src: './assets/icon/agenda_disabled.svg', id: '5'},
        {title: 'Просте додавання 8', src: './assets/icon/agenda_disabled.svg', id: '6'},
        {title: 'Просте додавання 9', src: './assets/icon/agenda_disabled.svg', id: '7'},
        {title: 'Тест', src: './assets/icon/agenda_disabled.svg', id: '8'}
    ];

    constructor(private route: ActivatedRoute, public favoriteServices: FavoriteServices, private http: HttpClient) {
    }

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            // @ts-ignore
            this.learn = this.favoriteServices.getById(+params.id);
        });
    }
}
