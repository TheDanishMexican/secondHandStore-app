import { productClicked } from "../../eventListeners/click.js";

export class Renderer {
    constructor(list, container, itemRenderer) {
        this.list = list;
        this.container = document.querySelector(`#${container}`);
        this.itemRenderer = itemRenderer;
    }

    render() {
        this.container.innerHTML = '';

        this.list.forEach((item) => {
            const HTML = this.itemRenderer.render(item);

            this.container.insertAdjacentHTML('beforeend', HTML);

            const element = this.container.lastElementChild;

            element.addEventListener("click", () => {
                productClicked(item);
            });


        });
    }
}