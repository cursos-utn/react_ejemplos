
const defaultState = {
    listado: [],
    serverUrl: 'https://toodoapi220190926085529.azurewebsites.net/api/TodoItems'
}

export default function(state = defaultState, action) {
    var posicion;
    switch(action.type) {
        case 'ADD':
            return {
                ...state,
                listado: [
                    ...state.listado,
                    action.data
                ]
            }
        case 'REMOVE':
            posicion = state.listado.findIndex(unItem => {
                return unItem.id === action.data;
            })
            return {
                ...state,
                listado: [
                    ...state.listado.slice(0, posicion),
                    ...state.listado.slice(posicion+1)
                ]
            }

        case 'UPDATE':
            posicion = state.listado.findIndex(unItem => {
                return unItem.id === action.data.id;
            })
            return {
                ...state,
                listado: [
                    ...state.listado.slice(0, posicion),
                    action.data,
                    ...state.listado.slice(posicion+1)
                ]
            }            

        case 'REFRESH':
            return {
                ...state,
                listado: action.data
            }
            
        default:
            return state;
    }
}