import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Trending } from '../trending-class/trending';



@Injectable({
  providedIn: 'root'
})
export class TrendingRequestService {

  trending: Trending;
  trendingArray: Trending[] = [];
  constructor(private http: HttpClient) {
    // this.trending = new Trending("", "");
  }

  trendingRequest() {
    interface ApiResponse {
      name: string;
      clip: any;
      data: any;
      images: any;
      original: any;
      url: string;
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(responses => {
        for (let index = 0; index < 25; index++) {
          let title = responses.data[index].images.original.url;
          let clipUrl = responses.data[index].title;
          console.log(responses.data[index].title);
          console.log(responses.data[index].images.original.url);
          let trendingItem = new Trending(title, clipUrl);
          this.trendingArray.push(trendingItem);

        }

        // console.log(responses.data[0].images.original.url);
        // console.log(responses.data[0].title);

        resolve()
        
      },
        error => {
          this.trending.name = "Use your mind"
          this.trending.clip = "error"

          reject(error)
        })
    })
    return promise
  }

  getAllItems(){
        return this.trendingArray

  }
}