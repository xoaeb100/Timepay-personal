import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/prismData/tabs';
import { DataTable } from 'simple-datatables';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private title:Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle("Document Center @ Timepay 2.0")
  }
  ngAfterViewInit() {
    let dataTable1 = new DataTable("#myTable1", {
      searchable: true,
      fixedHeight: true,
    });

  }
  html1: string = codeData.tabsHTML1;
  ts1: string = codeData.tabsTS1;
  html2: string = codeData.tabsHTML2;
  ts2: string = codeData.tabsTS2;
  html3: string = codeData.tabsHTML3;
  ts3: string = codeData.tabsTS3;
  html4: string = codeData.tabsHTML4;
  ts4: string = codeData.tabsTS4;
  html5: string = codeData.tabsHTML5;
  ts5: string = codeData.tabsTS5;


  Select2Open(select2Modal:any) {
    this.modalService.open(select2Modal,{ size: 'md'});
  }

}
