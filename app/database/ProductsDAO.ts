import * as mysql from "mysql"
import {Product} from "../models/Product";
import * as util from "util";

export class ProductsDAO{
    private dbHost: string;
    private dbPort: number;
    private dbUsername: string;
    private dbPassword: string;
    private pool: any;


    constructor(dbHost: string, dbPort: number, dbUsername: string, dbPassword: string) {
        this.dbHost = dbHost;
        this.dbPort = dbPort;
        this.dbUsername = dbUsername;
        this.dbPassword = dbPassword;
        this.pool = mysql.createPool({
            connectionLimit: 10,
            host: this.dbHost,
            port: this.dbPort,
            user: this.dbUsername,
            password: this.dbPassword
        });
    }

    public findAllProducts(callback: any){
        let products:Product[] = [];
        this.pool.getConnection(function (err:any, connection:any){
            if(err) throw err;
            connection.query('SELECT * FROM 391MILESTONE.PRODUCT', function (err:any, rows:any, fields:any){
                connection.release();
                if(err) throw err;
                for(let i = 0; i<rows.length; i++){
                    products.push(new Product(rows[i].PRODUCT_ID, rows[i].PRODUCT_NAME, rows[i].PRODUCT_DESCRIPTION, rows[i].PRODUCT_PRICE, rows[i].PRODUCT_QUANTITY))
                }
                callback(products)
            })
        })
    }

    public findProductById(id:number, callback:any){
        let product:Product
        this.pool.getConnection(async function (err:any, connection:any){
            if(err) throw err;
            connection.release();
            connection.query = util.promisify(connection.query)
            let results = await connection.query("SELECT * FROM 391MILESTONE.PRODUCT WHERE PRODUCT_ID=?", [id]);
            for(let i = 0; i < results.length; i++){
                product = new Product(results[i].ID, results[i].PRODUCT_NAME, results[i].PRODUCT_DESCRIPTION, results[i].PRODUCT_PRICE, results[i].PRODUCT_QUANTITY);
            }
            callback(product);
        })
    }

    public createProduct(product:Product, callback:any){
        let status = 0;
        this.pool.getConnection(async function (err:any, connection:any){
            if(err) throw err;
            connection.release();
            connection.query = util.promisify(connection.query)
            if(connection.query('INSERT INTO 391MILESTONE.PRODUCT(PRODUCT_NAME, PRODUCT_DESCRIPTION, PRODUCT_PRICE, PRODUCT_QUANTITY) VALUES(?,?,?,?)',
                [product.productName, product.productDescription, product.productPrice, product.productQuantity])){
                status = 1;
            }else {
                status = -1;
            }
            callback(status);
        })
    }

    public updateProduct(product:Product, id:number, callback:any){
        let status = 0;
        this.pool.getConnection(async function (err:any, connection:any){
            if(err) throw err;
            connection.release();
            connection.query = util.promisify(connection.query);
            if(connection.query('UPDATE 391MILESTONE.PRODUCT SET PRODUCT_NAME = ?, PRODUCT_DESCRIPTION = ?, PRODUCT_PRICE = ?, PRODUCT_QUANTITY = ? WHERE PRODUCT_ID = ?',
                [product.productName, product.productDescription, product.productPrice, product.productQuantity, product.id])){
                status = 1;
            }else {
                status = -1;
            }
            callback(status);
        })
    }

    public deleteProduct(id:number, callback:any){
        let status = 0;
        this.pool.getConnection(async function (err:any, connection:any){
            if(err) throw err;
            connection.release();
            connection.query = util.promisify(connection.query)
            if(connection.query('DELETE FROM 391MILESTONE.PRODUCT WHERE PRODUCT_ID = ?', [id])){
                status = 1;
            }else {
                status = -1;
            }
            callback(status);
        })
    }
}