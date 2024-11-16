import { Genre } from "./Genre.model";

export class genreWrapper{
    _embedded!: { genres : Genre[]};
}
    