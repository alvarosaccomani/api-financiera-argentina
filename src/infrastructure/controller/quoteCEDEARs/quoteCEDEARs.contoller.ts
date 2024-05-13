import { Request, Response } from "express";
import { QuoteCEDEARUseCase } from "../../../application/quoteCEDEARs/quoteCEDEARsUseCase";
import SocketAdapter from "../../services/socketAdapter";

export class QuoteCEDEARController {

    constructor(private cedearUseCase: QuoteCEDEARUseCase, private socketAdapter: SocketAdapter) {
        this.getAllCtrl = this.getAllCtrl.bind(this);
    }

    public async getAllCtrl(req: Request, res: Response) {
        const cedears = await this.cedearUseCase.getQuoteCEDEARs();
        res.status(200).send({
            status: `ok`,
            data: cedears
        });
    }
}