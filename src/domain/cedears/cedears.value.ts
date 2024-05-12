import { CEDEAREntity } from "./cedears.entity";

export class CEDEARValue implements CEDEAREntity {
    ticker: string;
    name: string;
    
    constructor({
            ticker,
            name
        }:{ 
            ticker: string,
            name: string
        }) {
        this.ticker = ticker;
        this.name = name;
    }
}