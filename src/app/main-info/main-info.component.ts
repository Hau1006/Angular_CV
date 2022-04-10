import { Component, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { DataService } from '../services/data.service';
// import { ModelComponent } from '../model/model.component';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { UserData } from '../models/user';
@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']

})
export class MainInfoComponent implements OnInit {
  infotable: String[] = [];
  obj: UserData;
  // data:any = 

  constructor(public dataService: DataService,
    private router: ActivatedRoute,
    private routerNav: Router) {
    console.log(this.router)
    console.log('state', this.routerNav.getCurrentNavigation()?.extras.state);
    this.obj = this.routerNav.getCurrentNavigation()?.extras.state as UserData;




    // this.obj = this.routerNav.getCurrentNavigation()?.extras.state;
    // Object, array => cloneDeep 
  }
  ngOnInit(): void {

    // this.obj = this.routerNav.getCurrentNavigation()?.extras.state;


    // const a = [1, 2, 3, 4, 5, 6]
    // const b = a.reduce((total, item) => {
    //   total += item
    //   return total
    // }, 0)

    // const c = a.reduce((obj: any, item) => obj[item + 1] = item, {})



    // console.log('b', b)()

    // () => {
    //   const test = ; Object.assign({}, this.obj)
    //   test.name = "Hau"

    // }
    // const array = ['Hau', 'FE'];
    //  = array;

    //  const coppyArray = cloneDeep(array)
  }







}
