import { Component, OnInit } from '@angular/core';
import { TrendingRequestService } from '../trending-http/trending-request.service';
import { Trending } from '../trending-class/trending';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {

  trending:Trending;
  trendingItems:Trending[]

  constructor(private trendingService:TrendingRequestService) { }

  ngOnInit() {

  this.trendingService.trendingRequest()
  this.trendingItems = this.trendingService.getAllItems();
  console.log(this.trendingItems);
  
  }


}
