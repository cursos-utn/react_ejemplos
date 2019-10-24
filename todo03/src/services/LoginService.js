import axios from 'axios';

export default class ToDoService {
    
    constructor() {
        this.http = axios;
        // Tomado de .env
        this.serverUrl = process.env.REACT_APP_SERVER + '/Account/';
    }

    async login(email, password) {
        var url = this.serverUrl + 'Login';
        var obj = {
            email: email,
            password: password
        }
        var options = {
            headers: {
                client: 1
            }
        }
        var respuesta = await this.http.post(url, obj, options);
        return respuesta.data;        
    }

    async register(email, password) {
        var url = this.serverUrl + 'Register';
        var obj = {
            email: email,
            password: password
        }
        var options = {
            headers: {
                client: 1
            }
        }        
        var respuesta = await this.http.post(url, obj, options);
        if (respuesta.data.statusCode===500) {
            console.log(respuesta);
            throw new Error(respuesta.data);
        }
        return respuesta.data;  
    }

}