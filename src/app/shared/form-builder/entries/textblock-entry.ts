import { BaseEntry } from './base-entry'; 

export class TextblockEntry extends BaseEntry<string> {
  controlType = 'textblock';
  minLength: number;
  maxLength: number;  

  constructor(options: {} = {}) {
    super(options); 
    this.minLength = options['minLength'] || null;
    this.maxLength = options['maxLength'] || null; 
  }
}