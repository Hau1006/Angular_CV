import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() title: string = "Thông Tin Bản Thân"

  @Input() content: TemplateRef<any>
  isCollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

}
