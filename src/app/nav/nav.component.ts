// import { ModelComponent } from './../model/model.component';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  active = 1;

  constructor() { }

  ngOnInit(): void {
  }
}
