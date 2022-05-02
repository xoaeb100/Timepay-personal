import { Component, OnInit } from '@angular/core';
import { NgSelectConfig } from '@ng-select/ng-select';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-advanced-form',
  templateUrl: './advanced-form.component.html',
  styleUrls: ['./advanced-form.component.scss']
})
export class AdvancedFormComponent implements OnInit {
  public disable: boolean = true;

  MultiseletDropDown:any[] = [];
  MultiseletDropDown1:any[] = [];
  SingleSearchItem = [];
  SingleSearchSettings = {};
  DisableItem = [];
  DisableSettings = {};
  groupDropdown:any[] = [];
  SingleItems = [];
  SingleSettings = {};
  multipleItems = [];
  multipleSettings = {};
  groupItems = [];
  groupSettings = {};

  

  constructor(private config: NgSelectConfig) { }

  ngOnInit(): void {
    this.MultiseletDropDown = [
			{ "id": 1, "itemName": 'Volvo' },
			{ "id": 2, "itemName": 'Saab' },
			{ "id": 3, "itemName": 'Mercedes' },
			{ "id": 4, "itemName": 'Audi' },
	]
	this.MultiseletDropDown1 = [
		{ "id": 1, "itemName": 'Volvo' },
		{ "id": 2, "itemName": 'Saab' },
		{ "id": 3, "itemName": 'Mercedes' },
		{ "id": 4, "itemName": 'Audi' },
		{ "id": 5, "itemName": 'Volvo' },
		{ "id": 6, "itemName": 'Saab' },
		{ "id": 7, "itemName": 'Mercedes' },
		{ "id": 8, "itemName": 'Audi' },
		{ "id": 9, "itemName": 'Volvo' },
		{ "id": 10, "itemName": 'Saab' },
		{ "id": 11, "itemName": 'Mercedes' },
		{ "id": 12, "itemName": 'Audi' },
		{ "id": 13, "itemName": 'Volvo' },
		{ "id": 14, "itemName": 'Saab' },
		{ "id": 15, "itemName": 'Mercedes' },
		{ "id": 16, "itemName": 'Audi' },
	]

    this.groupDropdown = [
			{ "id": 1, "itemName": "India", "category": "asia" },
			{ "id": 2, "itemName": "Singapore", "category": "asia pacific" },
			{ "id": 3, "itemName": "Germany", "category": "Europe" },
			{ "id": 4, "itemName": "France", "category": "Europe" },
			{ "id": 5, "itemName": "South Korea", "category": "asia" },
			{ "id": 6, "itemName": "Sweden", "category": "Europe" },
	];

    this.SingleSettings = {
			singleSelection: true,
			text: "Volvo",
			classes: "myclass custom-class"
	};

    this.DisableSettings = {
      text: "Saab",
			disabled: true
	};

    this.SingleSearchSettings = {
			singleSelection: true,
			text: 'Choose One',
			enableSearchFilter: true,
	};

    this.multipleSettings = {
		text: "Volvo",
		classes: "myclass custom-class"
	};

    this.groupSettings = {
		singleSelection: false,
		text: 'Volvo',
		selectAllText: 'Select All',
		unSelectAllText: 'UnSelect All',
		searchPlaceholderText: 'Search Group',
		enableSearchFilter: true,
		badgeShowLimit: 5,
		groupBy: 'category'
	}
    
  }

  
	separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
	PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
	phoneForm = new FormGroup({
		phone: new FormControl(undefined, [Validators.required])
	});

	changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	};

  public config1: DropzoneConfigInterface = {
		clickable: true,
		maxFiles: 1,
		addRemoveLinks: true,
		autoReset: null,
		errorReset: null,
		cancelReset: null
	};

	public config2: DropzoneConfigInterface = {
		clickable: true,
		maxFiles: 5,
		addRemoveLinks: true,
		autoReset: null,
		errorReset: null,
		cancelReset: null
	};

	public config3: DropzoneConfigInterface = {
		clickable: true,
		maxFiles: 1,
		addRemoveLinks: true,
		autoReset: null,
		errorReset: null,
		cancelReset: null,
		acceptedFiles: '.png',
	};

}
