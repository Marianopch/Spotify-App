import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { observable, Observable, of } from 'rxjs';
import * as dataraw from '../../../data/tracks.json'

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataTracksTrending$: Observable<TrackModel[]> = of([])
  dataTracksRandom$: Observable<TrackModel[]> = of([])

  constructor() {
    const { data }: any = (dataraw as any).default;
    this.dataTracksTrending$ = of(data)

 
  }
}
