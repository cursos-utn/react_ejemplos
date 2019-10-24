const estadoInicial = {
    taskList: [],
    token: '',
    responsablesList : [
        {id: 1, nombre: 'Persona 1'},
        {id: 2, nombre: 'Persona 2'},
        {id: 3, nombre: 'Persona 3'},
        {id: 4, nombre: 'Persona 4'},
        {id: 5, nombre: 'Persona 5'}
    ]
}
export default function(estadoActual = estadoInicial, action) 
{
    var pos = 0;
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...estadoActual,
                taskList: [
                    ...estadoActual.taskList,
                    action.data
                ]
            }
        case 'REMOVE_ITEM':
            pos = estadoActual.taskList.findIndex(unItem =>{ 
                return unItem.id === action.data
            })

            return {
                ...estadoActual,
                taskList: [
                    ...estadoActual.taskList.slice(0, pos),
                    ...estadoActual.taskList.slice(pos+1)
                ]
            }
        case 'INIT':
            return {
                ...estadoActual,
                taskList: action.data
            }

        case 'UPDATE_ITEM':

            pos = estadoActual.taskList.findIndex(unItem =>{ 
                return unItem.id === action.data.id
            })

            return {
                ...estadoActual,
                taskList: [
                    ...estadoActual.taskList.slice(0, pos),
                    action.data,
                    ...estadoActual.taskList.slice(pos+1)
                ]
            }

        case 'SET_TOKEN':
            return {
                ...estadoActual,
                token: action.data
            }
        default:
            return {...estadoActual};
    }
}