import {AdminPageService} from "../service/admin/admin-page.service";
import {AbstractControl, AsyncValidatorFn, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

export function validateEmailUnique(adminService: AdminPageService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return adminService
      .checkIfEmailExists(control.value)
      .pipe(
        map((result: boolean) =>
          result && control.dirty ? {emailAlreadyExists: true} : null
        )
      );
  }
}
