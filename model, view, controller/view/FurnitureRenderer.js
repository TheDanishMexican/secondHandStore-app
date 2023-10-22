export class FurnitureRenderer {
    render(item) {
        const HTML = /*HTML*/
            `
            <div class="product-item" id="${item.id}">
                <div class="item-header full-width">
                    <h2>${item.navn}</h2>
                </div>

                <div class="columns">
                <div class="column1">
                    <p>Type: ${item.type}</p>
                    <p>Farve: ${item.farve}</p>
                    <p>Størrelse: ${item.størrelse}</p>
                </div>

                <div class="column2">
                    <p>Pris: ${item.pris} kroner</p>
                    <p>Stand: ${item.stand}</p>
                    <p>Liggetid: ${item.opretteDato}</p>
                </div>
                </div>

                <div class="full-width">
                    <img src="${item.billede}" alt="${item.navn}">
                </div>
            </div>
            `;

        return HTML;
    }
}