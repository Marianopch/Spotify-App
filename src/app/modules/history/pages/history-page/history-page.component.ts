import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  listResults$: Observable<any>=of([])
  ngOnInit(): void {
  }

  reciveData(event:string):void{
    console.log("La data desde el padre..:", event )

    this.listResults$= this.searchService.searchTracks$(event)
  
  }

}
