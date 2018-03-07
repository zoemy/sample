import { CurrencyFormatterDirective } from './currency-formatter.directive';

describe('CurrencyFormatterDirective', () => {
  it('should create an instance', () => {
    const directive = new CurrencyFormatterDirective(null,null);
    expect(directive).toBeTruthy();
  });
});
