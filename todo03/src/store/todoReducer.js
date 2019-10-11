import ToDoService from '../services/ToDoService';

var toDoService = new ToDoService();

const estadoInicial = {
    taskList: [],
    token: ''
}
export default function(estadoActual = estadoInicial, action) 
{
    switch (action.type) {
        case 'ADD_ITEM':
            
            break;
        case 'REMOVE_ITEM':

            break;
        case 'INIT':
            return {
                taskList: action.data
            }

            break;
        case 'UPDATE_ITEM':

            break;

        case 'SET_TOKEN':

            break;
        default:
            return {...estadoActual};
    }
}