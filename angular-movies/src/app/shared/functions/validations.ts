import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function firstLetterShouldBeUpperCase(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = <string>control.value;

        if(!value) return null;
        if(value.length === 0) return null;

        const firstLetter = value[0];

        if(firstLetter !== firstLetter.toUpperCase()) {
            return {
                firstLetterShouldBeUpperCase: {
                    message: 'The first letter should be uppercase'
                }
            };
        }

        return null;
    }
}