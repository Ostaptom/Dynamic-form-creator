import {Component} from '@angular/core';
import {FormElements} from '../shared/models/form-elements';
import {FormElement} from '../shared/models/form-element.model';
import {CustomValidators} from '../shared/models/validators.model';
import {FormElementInput} from '../shared/models/form-element-input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Dynamic-form-creator';

  switchTabs: boolean = true;

  formElements: FormElements;
  formElement = new FormElement();

  constructor() {
  }

}
