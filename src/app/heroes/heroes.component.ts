import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    heroes = HEROES;
    // 所選的英雄
    selectedHero?: Hero;
    constructor() { }

    ngOnInit() {
    }

    onClick(hero: Hero) {
        this.selectedHero = hero;
    }


}
