import { Timestamp } from 'rxjs';

export enum TitleEnum {
    NONE = "",
    MR = "Mr.",
    MRS = "Mrs.",
    MX = "Mx.",
    MS = "Ms.",
    MISS = "Miss",
    MASTER = "Master",
    MAID = "Maid",
    MADAM = "Madam"
}

export interface DateOfBirth {
    day: number;
    month: number;
    year: number;
}

export interface AccountProfile {
    title?: TitleEnum;
    firstName: string;
    lastName: string;
    dateOfBirth: DateOfBirth;
}

export interface LiveRewardsCard {
    cardId: string;
    lastName: string;
    dateOfBirth: DateOfBirth;
}