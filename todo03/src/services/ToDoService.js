import axios from 'axios';

export default class ToDoService {
    
    constructor() {
        this.http = axios;
        this.serverUrl = 'https://todowebapi00123.azurewebsites.net/api/ToDoItems';
    }

    async getTareas() {
        var respuesta = await this.http.get(this.serverUrl);
        return respuesta.data;        
    }

    async postTarea(unToDo) {
        if (unToDo.name=="") {
            throw new Error('Debe ingresar un nombre para la tarea');
        }
        var respuesta = await this.http.post(this.serverUrl, unToDo);
        return respuesta.data;
    }

    async putTarea(unToDo) {
        if (unToDo.name=="") {
            throw new Error('Debe ingresar un nombre para la tarea');
        }
        var respuesta = await this.http.put(this.serverUrl + "/" + unToDo.id, unToDo);
        return respuesta.data;
    }

    async deleteTarea(id) {
        var respuesta = await this.http.delete(this.serverUrl + "/" + id);        
    }

    async patchTarea(unToDo) {

    }
}