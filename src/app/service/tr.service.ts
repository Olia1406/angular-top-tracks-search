import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TrService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://ws.audioscrobbler.com/2.0/?method=chart.getTopTracks&api_key=799b735ec3fb70c9e837206a0bddf428&user=yurasolia&format=json'
  }

  getData(): Observable<any> {
    return  this.http.get<any>(this.url)
  }

}
