import { QuoteCEDEAREntity } from "./quoteCEDEARs.entity";

export class QuoteCEDEARValue implements QuoteCEDEAREntity {
    ticker: string;
    timeQuote: string;
    nominalQty: string;
    buys: string;
    sale: string;
    nominalQty1: string;
    last: string;
    variation: string;
    opening: string;
    max: string;
    min: string;
    closingPrevious: string;
    volume: string;
    amount: string;
    operations: string;
    hour: string;
    
    constructor({
            ticker,
            timeQuote,
            nominalQty,
            buys,
            sale,
            nominalQty1,
            last,
            variation,
            opening,
            max,
            min,
            closingPrevious,
            volume,
            amount,
            operations,
            hour
        }:{ 
            ticker: string,
            timeQuote: string,
            nominalQty: string,
            buys: string,
            sale: string,
            nominalQty1: string,
            last: string,
            variation: string,
            opening: string,
            max: string,
            min: string,
            closingPrevious: string,
            volume: string,
            amount: string,
            operations: string,
            hour: string
        }) {
        this.ticker = ticker;
        this.timeQuote = timeQuote;
        this.nominalQty = nominalQty;
        this.buys = buys;
        this.sale = sale;
        this.nominalQty1 = nominalQty1;
        this.last = last;
        this.variation = variation;
        this.opening = opening;
        this.max = max;
        this.min = min;
        this.closingPrevious = closingPrevious;
        this.volume = volume;
        this.amount = amount;
        this.operations = operations;
        this.hour = hour;
    }
}