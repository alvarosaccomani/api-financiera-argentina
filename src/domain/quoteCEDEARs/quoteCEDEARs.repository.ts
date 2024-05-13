import { QuoteCEDEAREntity } from "./quoteCEDEARs.entity";

export interface QuoteCEDEARRepository {
    getQuoteCEDEARs(): Promise<QuoteCEDEAREntity[] | null>;
}