import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bank-recon',
  templateUrl: './bank-recon.component.html',
  styleUrls: ['./bank-recon.component.scss']
})
export class BankReconComponent implements OnInit {

  constructor(
    private title:Title,
  ) { }

  ngOnInit(): void {
    this.title.setTitle("Bank Reconcilation - Timepay 2.0")
  }

}
