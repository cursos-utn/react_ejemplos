import axios from 'axios';

export default class ToDoService {
    
    constructor() {
        this.http = axios;
        this.serverUrl = process.env.REACT_APP_SERVER + '/ToDoItems/';
    }

    async getTareas() {
        const respuesta = await this.http.get(this.serverUrl);
        return respuesta.data;        
    }

    async postTarea(unToDo) {
        if (unToDo.name === "") {
            throw new Error('Debe ingresar un nombre para la tarea');
        }
        const respuesta = await this.http.post(this.serverUrl, unToDo);
        return respuesta.data;
    }

    async putTarea(unToDo) {
        if (unToDo.name === "") {
            throw new Error('Debe ingresar un nombre para la tarea');
        }
        const respuesta = await this.http.put(this.serverUrl + "/" + unToDo.id, unToDo);
        return respuesta.data;
    }

    async deleteTarea(id) {
        await this.http.delete(this.serverUrl + "/" + id);        
    }

    async patchTarea(unToDo) {

    }
}