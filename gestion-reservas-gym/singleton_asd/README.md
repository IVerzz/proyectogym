# Implementación del Patrón Singleton 

## ¿Qué es el patrón Singleton?

El patrón Singleton es un patrón de diseño que asegura que una clase tenga una única instancia y proporciona un punto de acceso global a ella. Es útil cuando se necesita compartir un recurso único, como logs o configuraciones globales.

## ¿Cómo lo implementé?

Creé una clase `Logger` que guarda mensajes. La clase verifica si ya existe una instancia, y si es así, la retorna. Si no existe, la crea y la guarda como instancia única. También uso `Object.freeze` para evitar que la instancia sea modificada.

## ¿Qué hace el ejemplo?

Registra mensajes en la consola y los almacena internamente. Toda la aplicación puede acceder a la misma instancia y ver los logs con `logger.getLogs()`.

### Ejemplo:

```javascript
logger.log("Reserva creada.");
console.log(logger.getLogs());
