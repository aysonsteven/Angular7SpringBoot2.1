export class UserDTO{
    username: string = '';
    password: string  = '';
    errorMessage: string = 'Invalid Credentials';
    invalidLogin: boolean = false;
    constructor(){}
}