import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { Moment } from 'moment'
import { NgSelectConfig } from '@ng-select/ng-select';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { BrowserModule, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-new-member-master',
  templateUrl: './new-member-master.component.html',
  styleUrls: ['./new-member-master.component.scss']
})
export class NewMemberMasterComponent implements OnInit {

  @ViewChild('labelImport')
  labelImport!: ElementRef;

  model!: NgbDateStruct;
  date!: {year: number, month: number};
  selected!: {startDate: Moment, endDate: Moment};
  selectedDate:any ;
  datePickerConfig:any;

  status: boolean = false;
  status1: boolean = false;
  status2: boolean = false;
  status3: boolean = false;

  public color: string = '#2889e9'; 
  public color1: string = '#e920e9';

  public disable: boolean = true;
  select = ['Firefox']
  selectValue: any = null;
  selectValues = [
		{ value: 1, label: 'Firefox' },
		{ value: 2, label: 'Chrome' },
		{ value: 3, label: 'Safari' },
		{ value: 4, label: 'Opera' },
		{ value: 5, label: 'Internet Explorer' },
	]

  public config2: DropzoneConfigInterface = {
		clickable: true,
		maxFiles: 5,
		addRemoveLinks: true,
		autoReset: null,
		errorReset: null,
		cancelReset: null
	};

  constructor( private calendar: NgbCalendar, private config: NgSelectConfig,private title:Title ) { }

  ngOnInit(): void {
    this.title.setTitle("New Member @ Timepay 2.0")
    this.selectValue = this.selectValues[0];
    this.datePickerConfig = {
      firstDayOfWeek: 'su',
      monthFormat: 'MMM, YYYY',
      disableKeypress: false,
      allowMultiSelect: false,
      closeOnSelect: undefined,
      closeOnSelectDelay: 100,
      onOpenDelay: 0,
      weekDayFormat: 'ddd',
      appendTo: document.body,
      drops: 'down',
      opens: 'right',
      showNearMonthDays: true,
      showWeekNumbers: false,
      enableMonthSelector: true,
      format: "MM-DD-YYYY",
      yearFormat: 'YYYY',
      showGoToCurrent: true,
      dayBtnFormat: 'DD',
      monthBtnFormat: 'MMM',
      hours12Format: 'hh',
      hours24Format: 'HH',
      meridiemFormat: 'A',
      minutesFormat: 'mm',
      minutesInterval: 1,
      secondsFormat: 'ss',
      secondsInterval: 1,
      showSeconds: false,
      showTwentyFourHours: true,
      timeSeparator: ':',
      multipleYearsNavigateBy: 10,
      showMultipleYearsNavigation: false,
    }
  }

  
  clickEvent() { this.status = !this.status;}
  clickEvent1() { this.status1 = !this.status1;}
  clickEvent2() { this.status2 = !this.status2;}
  clickEvent3() { this.status3 = !this.status3;}

  fileToUpload: File | any = null;
  onFileChange(files: FileList) {
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map(f => f.name)
      .join(',');
    this.fileToUpload = files.item(0);
  }

}
