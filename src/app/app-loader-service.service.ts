import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import {finalize, map, switchMap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AppLoaderServiceService {

  isLoaded = false

  constructor(private http: HttpClient) { }

  loadApp(){

    return this.http.get<{assetsByChunkName : Record<string , string>}>('./assets/nfe/stats.json').pipe(

      map(stats => stats.assetsByChunkName),switchMap(assetMap => combineLatest(
        this.loadAssets(assetMap)
      )),finalize(() => this.isLoaded = true),map(results => results.every(Boolean))

    );
  }
  
  private loadAssets(assetMap: Record<string , string>){
    return null;
  }

}


