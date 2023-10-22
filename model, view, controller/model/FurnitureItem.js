export class FurnitureItem {
    constructor(obj) {
        this.id = obj.id;
        this.navn = obj.navn;
        this.type = obj.type;
        this.farve = obj.farve;
        this.pris = obj.pris;
        this.stand = obj.stand;
        this.størrelse = obj.størrelse;
        this.billede = obj.billede;
        this.opretteDato = obj.opretteDato;
    }
}