import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  tracks$:Observable<any>;
  tracks:Observable<any>;
  searchForm: FormGroup;

  constructor(private http: HttpClient) { 
    this.searchForm = new FormGroup({
      "searchParam": new FormControl("", Validators.required)
    })
  }

  ngOnInit(): void {
  }

  searchTrack() {
    this.tracks$ =this.http.get<any>(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${this.searchForm.controls.searchParam.value}&api_key=799b735ec3fb70c9e837206a0bddf428&format=json`)
    }
  
}
