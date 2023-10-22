"use strict";

import { getClothesData, getFurnitureData } from "./CRUD/read.js";
import { clothesClicked, frontpageClicked, furnitureClicked } from "./eventListeners/click.js";
import { clothesToRender } from "./model, view, controller/controller/clothesController.js";
import { furnitureToRender } from "./model, view, controller/controller/furnitureController.js";

window.addEventListener("load", initializeApp);

async function initializeApp() {
    await getClothesData();
    await getFurnitureData();

    clothesToRender.render();
    furnitureToRender.render();

    clothesClicked();
    furnitureClicked();
    frontpageClicked();
}