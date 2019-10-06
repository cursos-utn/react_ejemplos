
var defaultState = {
    fecha: ''
}

export default function(state = defaultState, action) {
    switch(action.type) {
        case 'UPDATE': 
            return {
                fecha: new Date()
            }
        case 'CLEAR':
            return {
                fecha: ''
            }
        default: 
            return {
                fecha: ''
            }
    }
}