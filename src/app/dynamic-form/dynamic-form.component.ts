import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormElements} from '../../shared/models/form-elements';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from '../../shared/models/validators.model';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  form: FormGroup;

  submitted: boolean = false;

  @Input() formElements: FormElements;
  @Output() sendForm = new EventEmitter();

  formData: any;

  constructor() {
  }

  get f() {
    return this.form.controls;
  }

  ngOnInit() {
    const formGroup = {};
    this.formElements.elements.forEach(element => {
      formGroup[element.formControlName] = new FormControl(element.value || '', this.mapControl(element.validators));
    });
    this.form = new FormGroup(formGroup);
    this.form.valueChanges.subscribe(next => {
      this.formData = next;
    }, error => {
      console.error(error);
    });
  }

  submitForm() {
    this.submitted = true;
    if (this.form.valid) {
      this.sendForm.emit(this.formData);
      this.form.reset();
      this.submitted = false;
    }
  }

  private mapControl(validators: CustomValidators) {
    const formValidators = [];
    if (validators) {
      for (let validation of Object.keys(validators)) {
        if (validation === 'required' && validators[validation]) {
          formValidators.push(Validators.required);
        } else if (validation === 'minLength' && validators[validation]) {
          formValidators.push(Validators.minLength(validators[validation]));
        } else if (validation === 'maxLength' && validators[validation]) {
          formValidators.push(Validators.maxLength(validators[validation]));
        } else if (validation === 'pattern' && validators[validation]) {
          formValidators.push(Validators.pattern(validation));
        }
      }
    }
    return formValidators;
  }


}
