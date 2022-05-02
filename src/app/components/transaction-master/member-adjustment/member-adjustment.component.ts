import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-member-adjustment',
  templateUrl: './member-adjustment.component.html',
  styleUrls: ['./member-adjustment.component.scss']
})
export class MemberAdjustmentComponent implements OnInit {

  constructor(
    private title:Title,
  ) { }

  ngOnInit(): void {
    this.title.setTitle("Member Adjustment - Timepay 2.0")
  }

}
