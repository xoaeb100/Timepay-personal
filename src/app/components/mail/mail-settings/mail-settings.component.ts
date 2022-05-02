import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
  selector: 'app-mail-settings',
  templateUrl: './mail-settings.component.html',
  styleUrls: ['./mail-settings.component.scss']
})
export class MailSettingsComponent implements OnInit {

  mailForm: FormGroup;
  

  selectValue:any = null;
  selectValues = [
    { value: 1, label: 'US English' },
    { value: 2, label: 'Arabic' },
    { value: 3, label: 'Korean' },
  ];

  selectZone:any = null;
  selectTimeZone = [
                  { value:"Pacific/Midway", label:'(GMT-11:00) Midway Island, Samoa'},
									{ value:"America/Adak", label:'(GMT-10:00) Hawaii-Aleutian'},
									{ value:"Etc/GMT+10", label:'(GMT-10:00) Hawaii'},
									{ value:"Pacific/Marquesas", label:'(GMT-09:30) Marquesas Islands</ng-option'},
									{ value:"Pacific/Gambier", label:'(GMT-09:00) Gambier Islands'},
									{ value:"America/Anchorage", label:'(GMT-09:00) Alaska'},
									{ value:"America/Ensenada", label:'(GMT-08:00) Tijuana, Baja California'},
									{ value:"Etc/GMT+8", label:'(GMT-08:00) Pitcairn Islands'},
									{ value:"America/Los_Angeles",label: '(GMT-08:00) Pacific Time (US & Canada)'},
									{ value:"America/Denver", label:'(GMT-07:00) Mountain Time (US & Canada)'},
									{ value:"America/Chihuahua", label: '(GMT-07:00) Chihuahua, La Paz, Mazatlan'},
									{ value:"America/Dawson_Creek", label:'(GMT-07:00) Arizona'},
									{ value:"America/Belize", label:'(GMT-06:00) Saskatchewan, Central America'},
									{ value:"America/Cancun", label:'(GMT-06:00) Guadalajara, Mexico City, Monterrey'},
									{ value:"Chile/EasterIsland", label:'(GMT-06:00) Easter Island'},
									{ value:"America/Chicago", label:'(GMT-06:00) Central Time (US & Canada)'},
									{ value:"America/New_York", label:'(GMT-05:00) Eastern Time (US & Canada)'},
									{ value:"America/Havana", label:'(GMT-05:00) Cuba'},
									{ value:"America/Bogota", label:'(GMT-05:00) Bogota, Lima, Quito, Rio Branco'},
									{ value:"America/Caracas", label:'(GMT-04:30) Caracas'},
									{ value:"America/Santiago", label:'(GMT-04:00) Santiago'},
									{ value:"America/La_Paz", label:'(GMT-04:00) La Paz'},
									{ value:"Atlantic/Stanley", label:'(GMT-04:00) Faukland Islands'},
									{ value:"America/Campo_Grande", label:'(GMT-04:00) Brazil'},
									{ value:"America/Goose_Bay", label:'(GMT-04:00) Atlantic Time (Goose Bay)'},
									{ value:"America/Glace_Bay", label:'(GMT-04:00) Atlantic Time' },
									{ value:"America/St_Johns", label:'(GMT-03:30) Newfoundland'},
									{ value:"America/Araguaina", label:'(GMT-03:00) UTC-3'},
									{ value:"America/Montevideo", label:'(GMT-03:00) Montevideo'},
									{ value:"America/Miquelon", label: '(GMT-03:00) Miquelon, St. Pierre'},
									{ value:"America/Godthab", label:'(GMT-03:00) Greenland'},
                  { value: "America/Argentina/Buenos_Aires", label: '(GMT-03:00) Buenos Aires'},
			            { value: "America/Sao_Paulo", label: '(GMT-03:00) Brasilia'},  
								  { value: "America/Noronha", label: '(GMT-02:00) Mid-Atlantic'},
								  { value: "Atlantic/Cape_Verde", label: '(GMT-01:00) Cape Verde Is.'},
								  { value: "Atlantic/Azores", label: '(GMT-01:00) Azores'},
								  { value: "Europe/Belfast", label: '(GMT) Greenwich Mean Time : Belfast'},
								  { value: "Europe/Dublin", label: '(GMT) Greenwich Mean Time : Dublin'},
							    { value: "Europe/Lisbon", label: '(GMT) Greenwich Mean Time : Lisbon'},
							    { value: "Europe/London", label: '(GMT) Greenwich Mean Time : London'},
							    { value: "Africa/Abidjan", label: '(GMT) Monrovia, Reykjavik'},
                  { value: "Europe/Amsterdam", label: '(GMT+01:00) Amsterdam, Berlin, Bern, RomeStockholm, Vienna'},
		  	          { value: "Europe/Brussels", label: '(GMT+01:00) Brussels, Copenhagen, Madrid, Paris'},
								  { value: "Africa/Algiers", label: '(GMT+01:00) West Central Africa'}, 
							    { value: "Africa/Windhoek", label: '(GMT+01:00) Windhoek'},
							    { value: "Asia/Beirut", label: '(GMT+02:00) Beirut'},
							    { value: "Africa/Cairo", label: '(GMT+02:00) Cairo'},
							    { value: "Asia/Gaza", label: '(GMT+02:00) Gaza'},
								  { value: "Africa/Blantyre", label: '(GMT+02:00) Harare, Pretoria'},
								  { value: "Asia/Jerusalem", label: '(GMT+02:00) Jerusalem'},
							    { value: "Europe/Minsk", label: '(GMT+02:00) Minsk'},
							    { value: "Asi: /Damascus", label: '(GMT+02:00) Syria'},
									{ value:"Europe/Moscow", label: '(GMT+03:00) Moscow, St. Petersburg, Volgograd'},
									{ value:"Africa/Addis_Ababa", label: '(GMT+03:00) Nairobi'},
									{ value:"Asia/Tehran", label: '(GMT+03:30) Tehran'},
									{ value:"Asia/Dubai", label: '(GMT+04:00) Abu Dhabi, Muscat'},
									{ value:"Asia/Yerevan", label: '(GMT+04:00) Yerevan'},
									{ value:"Asia/Kabul", label: '(GMT+04:30) Kabul'},
									{ value:"Asia/Yekaterinburg", label: '(GMT+05:00) Ekaterinburg'},
									{ value:"Asia/Tashkent", label: '(GMT+05:00) Tashkent'},
									{ value:"Asia/Kolkata", label: '(GMT+05:30) Chennai, Kolkata, Mumbai, New Delh'},
									{ value:"Asia/Katmandu", label: '(GMT+05:45) Kathmandu'},
									{ value:"Asia/Dhaka", label: '(GMT+06:00) Astana, Dhaka'},
									{ value:"Asia/Novosibirsk", label: '(GMT+06:00) Novosibirsk'},
									{ value:"Asia/Rangoon", label: '(GMT+06:30) Yangon (Rangoon)'},
									{ value:"Asia/Bangkok", label: '(GMT+07:00) Bangkok, Hanoi, Jakarta'},
									{ value:"Asia/Krasnoyarsk", label: '(GMT+07:00) Krasnoyarsk'},
									{ value:"Asia/Hong_Kong", label: '(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi'},
									{ value:"Asia/Irkutsk", label: '(GMT+08:00) Irkutsk, Ulaan Bataar'},
									{ value:"Australia/Perth", label: '(GMT+08:00) Perth'},
									{ value:"Australia/Eucla", label: '(GMT+08:45) Eucla'},
									{ value:"Asia/Tokyo", label: '(GMT+09:00) Osaka, Sapporo, Tokyo'},
									{ value:"Asia/Seoul", label: '(GMT+09:00) Seoul'},
									{ value:"Asia/Yakutsk", label: '(GMT+09:00) Yakutsk'},
									{ value:"Australia/Adelaide", label: '(GMT+09:30) Adelaide'},
									{ value:"Australia/Darwin", label: '(GMT+09:30) Darwin'},
									{ value:"Australia/Brisbane", label: '(GMT+10:00) Brisbane'},
									{ value:"Australia/Hobart", label: '(GMT+10:00) Hobart'},
									{ value:"Asia/Vladivostok", label: '(GMT+10:00) Vladivostok'},
									{ value:"Australia/Lord_Howe", label: '(GMT+10:30) Lord Howe Island'},
									{ value:"Etc/GMT-11", label: '(GMT+11:00) Solomon Is., New Caledonia'},
									{ value:"Asia/Magadan", label: '(GMT+11:00) Magadan'},
									{ value:"Pacific/Norfolk", label: '(GMT+11:30) Norfolk Island'},
									{ value:"Asia/Anadyr", label: '(GMT+12:00) Anadyr, Kamchatka'},
									{ value:"Pacific/Auckland", label: '(GMT+12:00) Auckland, Wellington'},
									{ value:"Etc/GMT-12", label: '(GMT+12:00) Fiji, Kamchatka, Marshall Is.'},
									{ value:"Pacific/Chatham", label: '(GMT+12:45) Chatham Islands'},
									{ value:"Pacific/Tongatapu", label: '(GMT+13:00) Nuku alofa'},
									{ value:"Pacific/Kiritimati", label: '(GMT+14:00) Kiritimati'}
  ];
  select!: FormControl

  constructor(
    private config: NgSelectConfig,
    private fb: FormBuilder
  ) {
    this.mailForm = this.fb.group({
      select : [this.selectValue],
      selectTimeZone : [this.selectZone] 
      
    })
  }

  ngOnInit(): void {
    this.selectValue = this.selectValues[0];
    this.selectZone = this.selectTimeZone[0];
  }

}
