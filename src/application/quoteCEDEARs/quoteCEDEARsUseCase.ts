import { chromium } from 'playwright';

export class QuoteCEDEARUseCase {
    constructor() {
        this.getQuoteCEDEARs = this.getQuoteCEDEARs.bind(this);
    }

    public async getQuoteCEDEARs() {
        // Iniciar una instancia del navegador Chrome
        const browser = await chromium.launch({
            headless: true
        });

        // Crear una nueva página
        const page = await browser.newPage();

        // Navegar a una URL
        await page.goto('https://bolsar.info/Cedears.php');

        // Esperar a que el selector del paginador esté disponible en la página
        await page.waitForSelector('.dataTables_paginate.paging_simple_numbers span');

        // Seleccionar el paginador por ID
        const paginatorList = await page.$('.dataTables_paginate.paging_simple_numbers span');
        const pages = await paginatorList?.$$eval('a', (elements) => elements.map((element) => parseInt(element.innerText)) );
        console.info(pages)

        let nombres = [
            'ticker',
            'timeQuote',
            'nominalQty',
            'buys',
            'sale',
            'nominalQty1',
            'last',
            'variation',
            'opening',
            'max',
            'min',
            'closingPrevious',
            'volume',
            'amount',
            'operations',
            'hour'
        ];

        // Array para almacenar los objetos de datos de la tabla
        let dataObjects: any = [];

        if(pages?.length) {
            for (let i = pages[0]; i < pages[pages.length - 1]; i++) {

                // Esperar a que el selector del elemento esté disponible en la página
                await page.waitForSelector('table#lideres1 tbody');
            
                // Obtener todas las filas de la tabla
                const rows = await page.$$('table#lideres1 tbody tr');

                // Recorrer cada fila de la tabla
                for (const row of rows) {
                    // Obtener todas las celdas de la fila
                    const cells = await row.$$('td, th');

                    // Objeto para almacenar los valores de las celdas de esta fila
                    let rowData: any = {};

                    // Recorrer cada celda de la fila
                    let i = 0;
                    for (const cell of cells) {
                        // Obtener el texto dentro de la celda
                        const cellText = await cell.innerText();
                    
                        // Agregar el valor al objeto rowData usando el índice de la celda como clave
                        let nombre = nombres[i];
                        rowData[nombre] = cellText.trim();
                        i++;
                    }

                    // Agregar el objeto rowData al array dataObjects
                    dataObjects.push(rowData);
                }
            }
        } else {

            // Esperar a que el selector del elemento esté disponible en la página
            await page.waitForSelector('table#lideres1 tbody');
        
            // Obtener todas las filas de la tabla
            const rows = await page.$$('table#lideres1 tbody tr');

            // Recorrer cada fila de la tabla
            for (const row of rows) {
                // Obtener todas las celdas de la fila
                const cells = await row.$$('td, th');

                // Objeto para almacenar los valores de las celdas de esta fila
                let rowData: any = {};

                // Recorrer cada celda de la fila
                let i = 0;
                for (const cell of cells) {
                    // Obtener el texto dentro de la celda
                    const cellText = await cell.innerText();
                
                    // Agregar el valor al objeto rowData usando el índice de la celda como clave
                    let nombre = nombres[i];
                    rowData[nombre] = cellText.trim();
                    i++;
                }

                // Agregar el objeto rowData al array dataObjects
                dataObjects.push(rowData);
            }
            // Devuelvo los valores de todas las opciones
            return dataObjects;
        }

        // Cerrar el navegador
        await browser.close();

        // Devuelvo los valores de todas las opciones
        return dataObjects;
    }

}