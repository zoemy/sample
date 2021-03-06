export class BaseEntry<T>{
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string; 
  valitationMessages:  { [key: string]: string  };
    constructor(options: {
                value?: T,
                key?: string,
                label?: string,
                required?: boolean,
                order?: number,
                controlType?: string, 
                valitationMessages?: { [key: string]: string  }
                } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';         
        this.valitationMessages = options.valitationMessages;
        options.valitationMessages;
    }
}