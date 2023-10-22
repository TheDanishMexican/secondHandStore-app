import { hideBodyItems } from "../model, view, controller/view/hideBodyElements.js";

export function furnitureClicked() {
    const buttonFurniture = document.querySelector("#furniture-button");

    const header = document.querySelector("#furnitureHeader");

    const furniture = document.querySelector("#furnitureContainer");

    buttonFurniture.addEventListener("click", () => {
        hideBodyItems();
        furniture.classList.remove("hidden");
        header.classList.remove("hidden");
    });
}

export function clothesClicked() {
    const clothes = document.querySelector("#clothesContainer");
    const header = document.querySelector("#clothesHeader");

    const buttonClothes = document.querySelector("#clothes-button");

    buttonClothes.addEventListener("click", () => {
        hideBodyItems();
        clothes.classList.remove("hidden");
        header.classList.remove("hidden");
    });
}

export function frontpageClicked() {
    const mainElement = document.querySelector("main");
    const footerElement = document.querySelector("footer");
    const imgElement = document.querySelector("#frontpage-image-container div");
    const button = document.querySelector("#frontpage-button");

    button.addEventListener("click", () => {
        hideBodyItems();
        imgElement.classList.remove('hidden');
        mainElement.classList.remove('hidden');
        footerElement.classList.remove('hidden');
    });
}

export function productClicked(product) {

    console.log(product);
}

