export class Product {

    private id: number;
    private productName: string;
    private productDescription: string;
    private productPrice: number;
    private productQuantity: number;

    constructor(id: number, productName: string, productDescription: string, productPrice: number, productQuantity: number) {
        this.id = id;
        this.productName = productName;
        this.productDescription = productDescription;
        this.productPrice = productPrice;
        this.productQuantity = productQuantity;
    }

}