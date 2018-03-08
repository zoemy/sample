import { BaseEntry } from './base-entry';

export class CurrencyEntry extends BaseEntry<string> {
  controlType = 'currency';
  min: number;
  max: number; 

  constructor(options: {} = {}) {
    super(options);
    this.min = options['min'] || null;
    this.max = options['max'] || null;
  }
}