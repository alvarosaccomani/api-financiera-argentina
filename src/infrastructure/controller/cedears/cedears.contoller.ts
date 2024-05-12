import { Request, Response } from "express";
import { CEDEARUseCase } from "../../../application/cedears/cedearsUseCase";
import SocketAdapter from "../../services/socketAdapter";

export class CEDEARController {

    constructor(private cedearUseCase: CEDEARUseCase, private socketAdapter: SocketAdapter) {
        this.getAllCtrl = this.getAllCtrl.bind(this);
    }

    public async getAllCtrl(req: Request, res: Response) {
        const cedears = await this.cedearUseCase.getCEDEARs();
        res.status(200).send({
            status: `ok`,
            data: cedears
        });
    }
}