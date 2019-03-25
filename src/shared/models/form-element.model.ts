import {Validators} from './validators.model';

export class FormElement<T> {

  name: string;
  title: string;
  id: string;
  typeElement: 'input' | 'select' | 'textarea';
  element: T;
  formControlName: string;
  value: string | null;
  validators: Validators;

}
