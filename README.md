# Auto Limpio
APRENDIZAJES ESPERADOS

•	Reconocer los principales aspectos relacionados con el desarrollo web distinguiendo el rol y elementos fundamentales de Front-End.
•	Utilizar el lenguaje de etiquetas htm15 para la estructuración del contenido de una página web básica acorde a un requerimiento entregado.
•	Aplicar hojas de estilo CSS básicas distinguiendo elementos de responsividad para personalizar la presentación de un documento HTML acorde a un requerimiento entregado.
•	Implementar un sitio web básico responsivo utilizando framework Bootstrap para organizar la presentación de un documento html.
•	Utilizar código Javascript para la personalización de eventos sencillos dentro de un documento html dando solución al problema planteado.
•	Utilizar biblioteca JQuery para la incorporación de elementos dinámicos en un documento html mediante el manejo básico de objetos y eventos del DOM.
•	Gestionar el código fuente de un proyecto utilizando GitHub para mantener un repositorio de código remoto seguro y permitir trabajo concurrente.











ENUNCIADO

Una empresa de lavado de autos llamada AutoLimpio, requiere un sistema que permita la creación de Órdenes de Trabajo de los servicios que presta la empresa. Este documento considera: 

1.	El registro de cliente.
2.	Datos del vehículo.
3.	Totalizar los valores de los servicios que se entregan en el local y
4.	Quien estuvo a cargo de realizar dichos servicios.

Posterior a la toma de requerimientos, se requiere los siguientes ítems a desarrollar:


I.	Estructura HTML

1.	Los datos que se requieren registrar de los clientes son:

a)	Rut.
b)	Digito verificador.
c)	Nombre. 
d)	Apellido. 
e)	Dirección.
f)	Comuna. (mostrar 5 comunas solamente).

2.	Los datos del vehículo son:

a)	Tipo de Vehículo (furgón, automóvil, camión, camioneta y moto).
b)	Marca
c)	Modelo
d)	Año
e)	Revisión técnica al día.

3.	En la actualidad se consideran 2 tipos de servicios:

a)	Lavado exterior con un valor de $7000. y
b)	Lavado de motor con un valor de $5000.

Se pide que se pueda seleccionar, uno o ambos.

4.	El encargado de prestar los servicios, estarán en una lista desplegable, donde el usuario lo seleccionará para luego registrar la fecha y hora de terminado de los servicios.







II.	Diseño.

5.	El diseño debe ser original y atractivo, dado que la página representará a la empresa frente a sus clientes. Puede ocupar todos los recursos que considere pertinente para la creación de esta.

6.	La página a construir, deberá adaptarse tanto a PC de escritorio como para Tablet y Celular, debido a que los encargados utilizan estos dispositivos dentro de la empresa.



III.	Validaciones de caracteres y longitud.

7.	Validar los datos requeridos para registrar los clientes:

1)	Rut  	: Solo números	8 dígitos.
2)	Digito verificador	: Números, k y K.	1 dígito.
3)	Nombre	: Solo letras. 	30 dígitos.
4)	Apellido	: Solo letras.	30 dígitos.
5)	Dirección	: Letras, números y espacios.	80 dígitos.
6)	Comuna	: OMITIR.

8.	Para los vehículos son:

a)	Tipo de Vehículo (furgón, automóvil, camión, camioneta y moto)	: OMITIR.
b)	Marca	: Solo letras	20 dígitos.
c)	Modelo	: Solo letras.	20 dígitos.
d)	Año	: Solo números.	4 dígitos.
e)	Revisión técnica al día	: OMITIR.

9.	Para los servicios, considerar que los datos son en neto.


IV.	Calculo total de servicios.

10.	Calcular el total a pagar CON impuesto (19%), de los servicios realizados al automóvil del cliente y enviar un mensaje señalando el nombre del cliente junto con el total a pagar. Utilizar un botón para realizar el cálculo.
