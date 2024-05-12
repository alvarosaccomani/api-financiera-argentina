import { Express } from "express";
import { CEDEARUseCase } from "../../../application/cedears/cedearsUseCase";
import { CEDEARController } from "../../controller/cedears/cedears.contoller";

import SocketAdapter from "../../services/socketAdapter";

function configureCEDEARSRoutes(app: Express, socketAdapter: SocketAdapter) {
    /*
    *   Iniciar casos de uso
    */
    
    const cedearsUseCase = new CEDEARUseCase();
    
    /*
    *   Iniciar controller
    */
    
    const cedearsCtrl = new CEDEARController(cedearsUseCase, socketAdapter);

    app.get(`/${process.env.BASE_URL_API}/cedears`, cedearsCtrl.getAllCtrl);
}

export default configureCEDEARSRoutes;