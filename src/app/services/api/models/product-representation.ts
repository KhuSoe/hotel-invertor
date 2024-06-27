import { RatingRepresentation } from "./rating-represnetation";

export interface ProductRepresentation{
    id? : number;
    titles? : string;
    description? : string;
    category? : string;
    image? : string;
    price? : number;
    rating? : RatingRepresentation;
}