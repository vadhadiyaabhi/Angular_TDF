import { AbstractControl, ControlContainer, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { Directive, Input } from "@angular/core";

@Directive({
    selector: '[appConfirmEqualValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: ConfirmEqualValidatorDirective,
            multi: true
        }
    ]

})

export class ConfirmEqualValidatorDirective implements Validator{

    @Input() appConfirmEqualValidator: string;
    validate(control: AbstractControl): {[key: string]: any} | null {
        const controlToEqual = control.parent?.get(this.appConfirmEqualValidator);
        if(controlToEqual && control.value != controlToEqual.value){
            return {'notEqual': true};
        }
        else {
            return null;
        }
    }

}