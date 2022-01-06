import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HeroService {
    private herosUrl = "http://localhost:8080/api/heroes";
    constructor(
        private messageService: MessageService,
        private http: HttpClient) {

    }

    private log(message: string) {
        this.messageService.add(`HeroService: ${message}`);
    }

    getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.herosUrl).pipe(
            tap(_ => this.log('fetched heroes')),
            catchError(this.handleError<Hero[]>('getHeroes', []))
        );
    }

    getHero(id: number): Observable<Hero> {
        const getHeroByIdUrl = `http://localhost:8080/api/heroes/${id}`;
        return this.http.get<Hero>(getHeroByIdUrl).pipe(
            tap(_ => this.log(`fetched hero id=${id}`)),
            catchError(this.handleError<Hero>(`getHero id=${id}`))
        );
    }

    searchHeroes(term: string): Observable<Hero[]> {
        if (!term.trim()) {
          // if not search term, return empty hero array.
          return of([]);
        }
        return this.http.get<Hero[]>(`http://localhost:8080/api/search/?name=${term}`).pipe(
          tap(x => x.length ?
             this.log(`found heroes matching "${term}"`) :
             this.log(`no heroes matching "${term}"`)),
          catchError(this.handleError<Hero[]>('searchHeroes', []))
        );
      }Ｆ

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
