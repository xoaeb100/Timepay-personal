import { Component, OnInit } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTable } from 'simple-datatables';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private title:Title,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.title.setTitle("Quick Actions @ Timepay 2.0")
  }
  Select2Open(select2Modal:any) {
    this.modalService.open(select2Modal,{ size: 'md'});
  }
  ngAfterViewInit() {
    let dataTable1 = new DataTable("#myTable1", {
      searchable: true,
      fixedHeight: true,
    });

    const listContainer:any = document.querySelector('#ChatList');
    const bodyContainer:any = document.querySelector('#ChatBody');
    
    const ps = new PerfectScrollbar(listContainer);
    const ps1 = new PerfectScrollbar(bodyContainer);

  }

}
