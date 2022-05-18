import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent implements OnInit {
  //Get the value of the tag
  @Input() tag: any;
  constructor() {}

  ngOnInit(): void {}
}
