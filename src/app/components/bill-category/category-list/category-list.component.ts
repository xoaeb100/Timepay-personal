import { Component, OnInit } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTable } from 'simple-datatables';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  constructor(
    private title:Title,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.title.setTitle("Bill Category - Timepay 2.0");
  }
  
  Select2Open(select2Modal:any) {
    this.modalService.open(select2Modal,{ size: 'md'});
  }

  ngAfterViewInit() {
    let dataTable1 = new DataTable("#myTableNew", {
      searchable: true,
      fixedHeight: true,
    });

  }

}
