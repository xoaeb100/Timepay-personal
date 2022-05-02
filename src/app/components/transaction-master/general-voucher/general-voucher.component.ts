import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-general-voucher',
  templateUrl: './general-voucher.component.html',
  styleUrls: ['./general-voucher.component.scss']
})
export class GeneralVoucherComponent implements OnInit {

  constructor(
    private title:Title,
  ) { }

  ngOnInit(): void {
    this.title.setTitle("General Voucher - Timepay 2.0")
  }

}
