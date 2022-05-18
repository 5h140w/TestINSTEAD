import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent implements OnInit {
  // Receive the value of taglist ( that was shared from the parent tag)
  @Input() TagList: any;
  constructor() {}

  ngOnInit(): void {}
}
