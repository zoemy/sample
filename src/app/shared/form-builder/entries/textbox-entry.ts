import { BaseEntry } from './base-entry'; 

export class TextboxEntry extends BaseEntry<string> {
  controlType = 'textbox';
  minLength: number;
  maxLength: number;
  pattern: string;
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
    this.minLength = options['minLength'] || null;
    this.maxLength = options['maxLength'] || null;
    this.pattern = options['pattern'] || null;
  }
}