import { Produit } from "./produit";

export interface panier {
    item: Produit;
    qty: number;
    amount: number;
    discount : number;
}