import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class SoundServices {
    audio = false;

    // tslint:disable-next-line:typedef
    playAudioWrong() {
        if (localStorage.getItem('OffSound')) {
            const audio = new Audio();
            audio.src = '/../../assets/sounds/wrong.mp3';
            audio.load();
            audio.play();
        }
    }

    // tslint:disable-next-line:typedef
    playAudioCorrect() {
        if (localStorage.getItem('OffSound')) {
            const audio = new Audio();
            audio.src = '/../../assets/sounds/correct.mp3';
            audio.load();
            audio.play();
        }
    }
}
