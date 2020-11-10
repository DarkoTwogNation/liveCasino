export enum CreditCardTypes {
    VISA = "Visa",
    AMEX = "Amex",
    MASTER = "MasterCard",
    DISCOVER = "Discover"
}

export interface CreditCard {
    type: CreditCardTypes;
    nameOnCard: string;
    cardNumber: number;
    expMonth: number;
    expYear: number;
    cv23: string;
    nickname: string
}
