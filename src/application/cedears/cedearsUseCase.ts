import { chromium } from 'playwright';

export class CEDEARUseCase {
    constructor() {
        this.getCEDEARs = this.getCEDEARs.bind(this);
    }

    public async getCEDEARs() {
        // Iniciar una instancia del navegador Chrome
        const browser = await chromium.launch({
            headless: true
        });

        // Crear una nueva página
        const page = await browser.newPage();

        // Navegar a una URL
        await page.goto('https://bolsar.info/Cedears.php');

        // Esperar a que el selector del elemento esté disponible en la página
        await page.waitForSelector('tr.header_table select');

        // Obtener el elemento <select> dentro del <tr>
        const selectElement = await page.$('tr.header_table select');

        // Obtener todas las opciones del <select>
        const options = await selectElement?.$$eval('option', (elements) => elements
                                                                                .filter(element => element.value !== "" )
                                                                                .map((element) => { return { value: element.value, ticker: element.innerText } })
                                                    );

        // Cerrar el navegador
        await browser.close();

        // Devuelvo los valores de todas las opciones
        return options;
    }

}