export default function(estado=0, accion) {
    switch (accion.type) {
        case 'INCREMENTAR':
            return estado+1
        case 'DECREMENTAR':
            return estado-1;
        default:
            return estado;
    }
}