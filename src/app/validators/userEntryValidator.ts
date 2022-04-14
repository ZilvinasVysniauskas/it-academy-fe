import {AdminPageService} from "../service/admin/admin-page.service";
import {AbstractControl, AsyncValidator, AsyncValidatorFn, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

export class UserEntryValidator {
  static validateId(adminService: AdminPageService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return adminService
        .checkIfUserIdExists(control.value)
        .pipe(
          map((result: boolean) =>
            result ? { idAlreadyExists: true } : null
          )
        );
    };
  }
}
