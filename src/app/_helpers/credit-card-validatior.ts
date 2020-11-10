import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

export const creditCardValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const cardType = control.get('type').value;
    const cardNumber = control.get('cardNumber').value;
    const visaRegExp = new RegExp("^4[0-9]{12}(?:[0-9]{3})?$");
    const amexRegExp = new RegExp("^3[47][0-9]{13}$");
    const masterCardRegExp = new RegExp("^5[1-5][0-9]{14}$");
    const discoverRegExp = new RegExp("^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$");

    if (cardType === 'Visa') {
        return visaRegExp.test(cardNumber) ? null: {'creditCard': true};
    }

    if (cardType === 'Amex') {
        return amexRegExp.test(cardNumber) ? {'creditCard': true}: null;
    }

    if (cardType === 'MasterCard') {
        return masterCardRegExp.test(cardNumber) ? {'creditCard': true}: null;
    }

    if (cardType === 'Discover') {
        return discoverRegExp.test(cardNumber) ? {'creditCard': true}: null;
    }

    return null;
};