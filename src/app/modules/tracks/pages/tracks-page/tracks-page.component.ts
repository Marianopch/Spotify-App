import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';
import * as dataRaw from "../../../../data/tracks.json"

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {

  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []

  listObservers$: Array<Subscription> = []

  constructor(private trackService : TrackService) { }

  ngOnInit(): void {
   const observer1$ = this.trackService.dataTracksTrending$.subscribe
   (Response=> {
     this.tracksTrending = Response
     console.log('canciones trending -------------->', Response)
   })

   this.listObservers$ = [observer1$]
  }

  ngOnDestroy(): void {
      this.listObservers$.forEach(u => u.unsubscribe())

  }
}
