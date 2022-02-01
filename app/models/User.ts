export class User{

    private _id: number;
    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private _phoneNumber: number;
    private _username: string;
    private _password: string;
    private _isActive: boolean;
    private _role: number;


    constructor(id: number, firstName: string, lastName: string, email: string, phoneNumber: number, username: string, password: string, isActive: boolean, role: number) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._phoneNumber = phoneNumber;
        this._username = username;
        this._password = password;
        this._isActive = isActive;
        this._role = role;
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get phoneNumber(): number {
        return this._phoneNumber;
    }

    set phoneNumber(value: number) {
        this._phoneNumber = value;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get isActive(): boolean {
        return this._isActive;
    }

    set isActive(value: boolean) {
        this._isActive = value;
    }

    get role(): number {
        return this._role;
    }

    set role(value: number) {
        this._role = value;
    }
}