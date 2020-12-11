import { Component, OnInit } from '@angular/core';
import { TrService } from '../service/tr.service';
import { Observable, pipe } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  topTracks$: Observable<any>;
  currentPage: number =1;
  tracksPerPage: number = 15;
  startIndex:number;

  constructor(private trServ: TrService) {
  
  }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.startIndex = this.tracksPerPage * (this.currentPage - 1)
    this.topTracks$ = this.trServ.getData()
    this.trServ.getData().subscribe(
      d => console.log(d)
    )
  }

  onPageChanged(event) {
    this.currentPage = event.page;
    this.startIndex = this.tracksPerPage * (this.currentPage - 1)
  }


}
