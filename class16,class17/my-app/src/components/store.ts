import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const counter = atom(0);
export const cart= atomWithStorage('cart',[]);
