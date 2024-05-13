import { Express } from "express";
import { QuoteCEDEARUseCase } from "../../../application/quoteCEDEARs/quoteCEDEARsUseCase";
import { QuoteCEDEARController } from "../../controller/quoteCEDEARs/quoteCEDEARs.contoller";

import SocketAdapter from "../../services/socketAdapter";

function configureQuoteCEDEARSRoutes(app: Express, socketAdapter: SocketAdapter) {
    /*
    *   Iniciar casos de uso
    */
    
    const quoteCedearsUseCase = new QuoteCEDEARUseCase();
    
    /*
    *   Iniciar controller
    */
    
    const quoteCedearsCtrl = new QuoteCEDEARController(quoteCedearsUseCase, socketAdapter);

    app.get(`/${process.env.BASE_URL_API}/quoteCEDEARs`, quoteCedearsCtrl.getAllCtrl);
}

export default configureQuoteCEDEARSRoutes;