import { Component, OnInit, Input } from '@angular/core';
import { AdsService } from 'src/app/services/ads/ads.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PagedAds } from 'src/app/models/PagedAds';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {
  model: Observable<PagedAds>;
  constructor(public service: AdsService, 
    private route: ActivatedRoute,
) { }

  ngOnInit(): void {
    this.model = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getByCategory(params.get('categoryId')))
    );
  }

}
