export class CustomValidators {

  constructor(private required: boolean = false,
              private minLength?: number,
              private maxLength?: number,
              private pattern?: RegExp) {

  }
}
