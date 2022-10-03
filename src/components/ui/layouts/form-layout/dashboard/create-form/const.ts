import { CreateFormI } from "components/frontend/form/dashboard/create-form/types";

export type DataT = {
    placeholderAndLabel: string,
    name: keyof CreateFormI,
}[]

export const airSmart: DataT = [
    {
        placeholderAndLabel: "Therapy Air Smart cena",
        name: "airSmartPrice",
    },
    {
        placeholderAndLabel: "Therapy Air Smart popust cena",
        name: "airSmartDiscountPrice",
    },
    {
        placeholderAndLabel: "Aktuelni popust u procentima",
        name: "airSmartDiscountPercent",
    },
    {
        placeholderAndLabel: "Preostali broj uredjaja na stanju",
        name: "airSmartDevicesInStock",
    },
]

export const therapyAiriOnWhite: DataT = [
    {
        placeholderAndLabel: "Therapy Air iOn White cena",
        name: "airiOnWhitePrice",
    },
    {
        placeholderAndLabel: "Therapy Air iOn White popust cena",
        name: "airiOnWhiteDiscountPrice",
    },
    {
        placeholderAndLabel: "Aktuelni popust u procentima",
        name: "airiOnWhiteDiscountPercent",
    },
    {
        placeholderAndLabel: "Preostali broj uredjaja na stanju",
        name: "airiOnWhiteDevicesInStock",
    },
]

export const therapyAiriOnBlack: DataT = [
    {
        placeholderAndLabel: "Therapy Air iOn Black cena",
        name: "airiOnBlackPrice",
    },
    {
        placeholderAndLabel: "Therapy Air iOn Black popust cena",
        name: "airiOnBlackDiscountPrice",
    },
    {
        placeholderAndLabel: "Aktuelni popust u procentima",
        name: "airiOnBlackDiscountPercent",
    },
    {
        placeholderAndLabel: "Preostali broj uredjaja na stanju",
        name: "airiOnBlackDevicesInStock",
    },
]