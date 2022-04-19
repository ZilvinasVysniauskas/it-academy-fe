import {FormControl} from "@angular/forms";

export function validateEmail(email: FormControl) {

  return /@corporate.com$/.test(email.value)? null : {
    validateEmail: {
      valid: false
    }
  };
}
