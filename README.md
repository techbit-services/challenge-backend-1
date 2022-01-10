# challenge-backend-1

## Contexto
Se tiene una lista de usuarios, los cuales tienen una deuda generada y cuotas pendientes.
El script necesario debe ser capaz de cobrar sus deudas.

## Condiciones
Se debe generar un script que cumpla con las siguientes condiciones:
-   Se debe ejecutar el primer y tercer lunes de cada mes.
-   Cobrar la deuda de cada usuario solo en la lunes que le corresponda.
-   Si el usuario no tiene saldo, no se cobra su deuda, se agrega un 10% del valor de la cuota actual al monto total y monto que deben pagar, y se pasa su status a ‘DEFAULTER’
-   Si el usuario finalizó su deuda se cambia su status a ‘FINISHED’

Instale las dependencias que considere necesarias.

## Criterios
Se toman en cuenta los siguientes criterios:
-   Uso de código limpio
-   Manejo de fujo de ramas en GIT
-   Test unitario
-   Lectura e interpretación del código previamente generado.