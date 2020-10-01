import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  adminHome
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

}

// this.route.queryParams.subscribe(params => {
//   this.adminHome = params['adminHome']
// })