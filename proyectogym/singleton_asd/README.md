
# Patrón Singleton en JavaScript

## ¿Qué es el patrón Singleton?
El patrón Singleton es un patrón de diseño que restringe la instanciación de una clase a un solo objeto. 
Esto es útil cuando se necesita exactamente un objeto para coordinar acciones en todo el sistema.

## ¿Cómo se implementó?
Se creó una clase `Singleton` que verifica si ya existe una instancia previa. 
Si existe, retorna la misma; si no, crea una nueva. 
De esta forma, siempre se reutiliza la misma instancia.

## ¿Qué hace el ejemplo?
El archivo `singleton.js` crea dos instancias: `instanceA` y `instanceB`. 
Ambas referencian al mismo objeto. Esto se demuestra imprimiendo su marca de tiempo 
y comparando si son estrictamente iguales.
