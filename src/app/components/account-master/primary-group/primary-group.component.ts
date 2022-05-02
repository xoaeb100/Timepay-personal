import { Component, OnInit } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTable } from 'simple-datatables';

@Component({
  selector: 'app-primary-group',
  templateUrl: './primary-group.component.html',
  styleUrls: ['./primary-group.component.scss']
})
export class PrimaryGroupComponent implements OnInit {

  constructor(
    private title:Title,
    private modalService: NgbModal,
  ) { }


  Select2Open(select2Modal:any) {
    this.modalService.open(select2Modal,{ size: 'md'});
  }

  ngAfterViewInit() {
    let dataTable1 = new DataTable("#myTable1", {
      searchable: true,
      fixedHeight: true,
    });

  }

  ngOnInit(): void {
    this.title.setTitle("Account Groups - Timepay 2.0")
  }

}
