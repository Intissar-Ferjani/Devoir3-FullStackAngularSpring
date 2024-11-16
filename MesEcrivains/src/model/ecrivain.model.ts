import { Genre } from "./Genre.model";
import { Image } from "./Image.model";

export class Ecrivain {

    idEcrivain?: number;
    nomEcrivain?: string;
    honoraires?: number;
    dateDebutCarriere?: Date;
    genre!: Genre;
    image!: Image;
    imageStr!: string;

    images!: Image[];
}