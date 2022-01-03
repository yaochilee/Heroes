import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    heroes: Hero[] = [];
    // 所選的英雄
    selectedHero?: Hero;

    constructor(
        private heroService: HeroService,
        private messageService: MessageService
    ) {
    }

    ngOnInit() {
        this.getHeroes();
    }

    onClick(hero: Hero) {
        
    }

    getHeroes(): void {
        this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
        this.messageService.add(`HerosComponent: Selected hero id ${hero.id}`);
    }

}
