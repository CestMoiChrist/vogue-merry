export class Restaurant {
    nom: string;
    adresse!: string;
    horaire!: string[];
    image!: string;
    site_web!: string

    constructor(nom: string) {
        this.nom = nom;
    }
}