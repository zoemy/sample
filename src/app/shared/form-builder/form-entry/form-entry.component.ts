import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseEntry } from '../entries/base-entry'; 

@Component({
  selector: 'form-entry',
  templateUrl: './form-entry.component.html',
  styleUrls: ['./form-entry.component.css']
})
export class FormEntryComponent {

  @Input() displayMessage: { [key: string]: string };
  @Input() entry: BaseEntry<any>;
  @Input() form: FormGroup;
  
}
