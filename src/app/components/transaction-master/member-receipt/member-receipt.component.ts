import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { DataTable } from "simple-datatables";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-member-receipt",
  templateUrl: "./member-receipt.component.html",
  styleUrls: ["./member-receipt.component.scss"],
})
export class MemberReceiptComponent implements OnInit {
  constructor(private title: Title, private modalService: NgbModal) {}

  Select2Open(select2Modal: any) {
    this.modalService.open(select2Modal, { size: "md" });
  }

  ngOnInit(): void {
    this.title.setTitle("Member Receipts - Timepay 2.0");
  }

  ngAfterViewInit() {
    let dataTable1 = new DataTable("#myTable1", {
      searchable: true,
      fixedHeight: true,
    });
  }
}
