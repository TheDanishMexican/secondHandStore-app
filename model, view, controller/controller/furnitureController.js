import { FurnitureRenderer } from "../view/FurnitureRenderer.js";
import { Renderer } from "../view/Renderer.js";

export const furnitureObjects = [];
export const furnitureToRender = new Renderer(furnitureObjects, 'furnitureContainer', new FurnitureRenderer());
