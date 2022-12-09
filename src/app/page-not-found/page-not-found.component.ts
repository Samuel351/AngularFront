import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit{

  constructor(private router: Router) {}

  ngOnInit()
  {
    interval(1000);
    this.router.navigate(['/login']);
  }


}
