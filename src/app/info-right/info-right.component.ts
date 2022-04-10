import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-right',
  templateUrl: './info-right.component.html',
  styleUrls: ['./info-right.component.scss']
})
export class InfoRightComponent implements OnInit {
  @Input() bigTitle: string = "Hoc Van"
  @Input() title: string = "Dai hoc TopCv"
  @Input() job: any = 'Quan tri doanh';
  @Input() datestart: string = '12/2022'
  @Input() dateend: string = '12/2023'
  @Input() info: { info1: string, info2: string }[] = [{ info1: "xep loai kha", info2: "xep loai gioi" }]

  constructor() { }

  ngOnInit(): void {
  }

}
