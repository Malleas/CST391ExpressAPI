export class Product {

    private _id: number;
    private _productName: string;
    private _productDescription: string;
    private _productPrice: number;
    private _productQuantity: number;

    constructor(id: number, productName: string, productDescription: string, productPrice: number, productQuantity: number) {
        this._id = id;
        this._productName = productName;
        this._productDescription = productDescription;
        this._productPrice = productPrice;
        this._productQuantity = productQuantity;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get productName(): string {
        return this._productName;
    }

    set productName(value: string) {
        this._productName = value;
    }

    get productDescription(): string {
        return this._productDescription;
    }

    set productDescription(value: string) {
        this._productDescription = value;
    }

    get productPrice(): number {
        return this._productPrice;
    }

    set productPrice(value: number) {
        this._productPrice = value;
    }

    get productQuantity(): number {
        return this._productQuantity;
    }

    set productQuantity(value: number) {
        this._productQuantity = value;
    }
}