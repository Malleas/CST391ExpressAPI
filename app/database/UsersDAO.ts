import * as mysql from "mysql"
import * as util from "util";
import {User} from "../models/User";

export class UsersDAO{
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

    public findAllUsers(callback: any){
        let users:User[] = [];
        this.pool.getConnection(function (err:any, connection:any){
            if(err) throw err;
            connection.query('SELECT * FROM 391MILESTONE.USER', function (err:any, rows:any, fields:any){
                connection.release();
                if(err) throw err;
                for(let i = 0; i<rows.length; i++){
                    users.push(new User(rows[i].ID, rows[i].FIRST_NAME, rows[i].LAST_NAME, rows[i].EMAIL, rows[i].PHONE_NUMBER, rows[i].USERNAME, rows[i].PASSWORD, rows[i].IS_ACTIVE, rows[i].ROLE))
                }
                callback(users)
            })
        })
    }

    public findUserById(id:number, callback:any){
        let user:User;
        this.pool.getConnection(function (err:any, connection:any){
            if(err) throw err;
            connection.query('SELECT * FROM 391MILESTONE.USER WHERE USER_ID=?', [id], function (err:any, rows:any, fields:any){
                connection.release();
                if(err) throw err;
                for(let i = 0; i<rows.length; i++){
                    user = new User(rows[i].ID, rows[i].FIRST_NAME, rows[i].LAST_NAME, rows[i].EMAIL, rows[i].PHONE_NUMBER, rows[i].USERNAME, rows[i].PASSWORD, rows[i].IS_ACTIVE, rows[i].ROLE)
                }
                callback(user)
            })

        })
    }

    public createUser(user:User, callback:any){
        let status = 0;
        this.pool.getConnection(async function (err:any, connection:any){
            if(err) throw err;
            connection.release();
            connection.query = util.promisify(connection.query)
            if(connection.query('INSERT INTO 391MILESTONE.USER(FIRST_NAME, LAST_NAME, EMAIL, PHONE_NUMBER, USERNAME, PASSWORD) VALUES (?,?,?,?,?,?)',
                [user.firstName, user.lastName, user.email, user.phoneNumber, user.username, user.password])){
                status = 1;
            }else {
                status = -1;
            }
            callback(status);
        })
    }

    public updateProduct(user:User, id:number, callback:any){
        let status = 0;
        this.pool.getConnection(async function (err:any, connection:any){
            if(err) throw err;
            connection.release();
            connection.query = util.promisify(connection.query);
            if(connection.query('UPDATE 391MILESTONE.USER SET FIRST_NAME = ?, LAST_NAME = ?, EMAIL = ?, PHONE_NUMBER = ?, USERNAME = ?, PASSWORD = ? WHERE USER_ID = ?',
                [user.firstName, user.lastName, user.email, user.phoneNumber, user.username, user.password, user.id])){
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
            if(connection.query('DELETE FROM 391MILESTONE.USER WHERE ID = ?', [id])){
                status = 1;
            }else {
                status = -1;
            }
            callback(status);
        })
    }
}