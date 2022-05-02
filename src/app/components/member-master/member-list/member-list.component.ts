import { Component, OnInit } from '@angular/core';
import { DataTable } from 'simple-datatables';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { BrowserModule, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private title:Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle("Member Master @ Timepay 2.0")
  }
  ngAfterViewInit() {
    let dataTable1 = new DataTable("#myTable1", {
      searchable: true,
      fixedHeight: true,
    });

  }

  Select2Open(select2Modal:any) {
    this.modalService.open(select2Modal,{ size: 'md'});
  }

  public config2: DropzoneConfigInterface = {
		clickable: true,
		maxFiles: 5,
		addRemoveLinks: true,
		autoReset: null,
		errorReset: null,
		cancelReset: null
	};

}
