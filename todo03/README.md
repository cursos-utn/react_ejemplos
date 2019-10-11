# ToDo final - en desarrollo

## Estructura de componentes

* ToDo
  * ToDoItem
  * ToDoAddItem

## Estructura de carpetas

* src
   * store: reducers
   * services: servicios de la app (por ahora solo ToDoService)
   * components: componentes visuales de la app

## Estado

```
{
    taskList: [],
    token: ''
}
```

## Comunicación con el servidor

La comunicación con el servidor la realizamos por medio de un service. Cada componente hace uso del service que necesite (Ver ToDo.js que utiliza el ToDoService). El componente cuando realiza el dispatch, lo realiza con el resultado de la operación retornada por el servidor (es decir, no se realiza código asincrónico dentro del reducer). 

Esto fué modificado para facilitar el trabajo dentro del reducer (ya que la función de cambio de estado NO puede ser asincrónica).

## Pendientes
* Mejorar como se muestra cada tarea
* Alta de tarea en el servidor
* Marcar tarea como finalizada en el servidor
* Editar tarea
* Definir patch para asignar tarea a usuario
