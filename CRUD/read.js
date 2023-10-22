import { clothesObjects } from "../model, view, controller/controller/clothesController.js";
import { furnitureObjects } from "../model, view, controller/controller/furnitureController.js";
import { ClothesItem } from "../model, view, controller/model/ClothesItem.js";
import { FurnitureItem } from "../model, view, controller/model/FurnitureItem.js";



export async function getClothesData() {

    try {
        const response = await fetch('dummy data/clothes.json');
        const data = await response.json();

        if (response.ok) {

            data.forEach(item => {
                const newItem = new ClothesItem(item);
                clothesObjects.push(newItem);
            });
        }

    } catch (error) {
        console.log(error);
    }
}


export async function getFurnitureData() {

    try {
        const response = await fetch('dummy data/furniture.json');
        const data = await response.json();

        if (response.ok) {

            data.forEach(item => {
                const newItem = new FurnitureItem(item);
                furnitureObjects.push(newItem);
            });
        }

    } catch (error) {
        console.log(error);
    }
}

export async function getEmployeesData() {

}