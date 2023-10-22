import { ClothesRenderer } from "../view/ClothesRenderer.js";
import { Renderer } from "../view/Renderer.js";

export const clothesObjects = [];
export const clothesToRender = new Renderer(clothesObjects, 'clothesContainer', new ClothesRenderer());

