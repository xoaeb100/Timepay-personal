import { Component, OnInit } from "@angular/core";
import { DataTable } from "simple-datatables";
import { BrowserModule, Title } from "@angular/platform-browser";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { AngularEditorConfig } from "@kolkov/angular-editor";
import { DropzoneConfigInterface } from "ngx-dropzone-wrapper";

@Component({
  selector: "app-generation",
  templateUrl: "./generation.component.html",
  styleUrls: ["./generation.component.scss"],
})
export class GenerationComponent implements OnInit {
  constructor(private title: Title, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.title.setTitle("Bill Generation @ Timepay 2.0");
  }
  Select2Open(select2Modal: any) {
    this.modalService.open(select2Modal, { size: "md" });
  }

  ngAfterViewInit() {
    let dataTable1 = new DataTable("#myTable1", {
      searchable: true,
      fixedHeight: true,
    });
  }

  //ck Editor
  public Editor = ClassicEditor;
  public onReady(editor: any) {
    editor.ui.view.editable.element.parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.view.editable.element
    );
  }

  OpenEditor(editormodal: any) {
    this.modalService.open(editormodal, { centered: true, size: "lg" });
  }

  //Angular Editor
  public config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: "50rem",
    minHeight: "5rem",
    placeholder: "Enter text here...",
    translate: "no",
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: "redText",
        class: "redText",
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ],
  };

  //Quil Editors

  quillConfig = {
    //toolbar: '.toolbar',
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ["clean"], // remove formatting button

      ["link", "image", "video"], // link and image, video
    ],
  };

  public config2: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 5,
    addRemoveLinks: true,
    autoReset: null,
    errorReset: null,
    cancelReset: null,
  };
}
