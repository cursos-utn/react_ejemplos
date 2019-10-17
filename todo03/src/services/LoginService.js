import axios from 'axios';

export default class ToDoService {
    
    constructor() {
        this.http = axios;
        this.serverUrl = 'https://todowebapi00123.azurewebsites.net/api/Account/';
    }

    async login(email, password) {
        var url = this.serverUrl + 'Login';
        var obj = {
            email: email,
            password: password
        }
        var respuesta = await this.http.post(url, obj);
        return respuesta.data;        
    }

    async register(email, password) {
        var url = this.serverUrl + 'Register';
        console.log(url);
        var obj = {
            email: email,
            password: password
        }
        var respuesta = await this.http.post(url, obj);
        return respuesta.data;  
    }

}