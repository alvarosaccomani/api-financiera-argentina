import { CEDEAREntity } from "./cedears.entity";

export interface CEDEARRepository {
    getCEDEARs(): Promise<CEDEAREntity[] | null>;
}