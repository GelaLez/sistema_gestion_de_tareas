# sistema_gestion_de_tareas


El sistema de gestion de tareas tiene como proposito el que un usuario pueda visualizar, 
agregar, editar o eliminar las tareas que quiera registrar en su dia a dia. 
Y debido a que el sistema es utilizado por varios usuarios, es necesario que la
API identifique al usuarioo session que esta solicitando.


Preparativos previos

debes crear una base de datos con el nombre tareas y agregar las siguientes tablas



1.- Despues para poner en funcionamiento el sistema tenemos que clonar el repo, la liga es :
https://github.com/GelaLez/sistema_gestion_de_tareas.git

2.- instalar las dependencias con el manejador de paquetes npm
  npm install

3.- Correr el programa
  node app.js
  
4.- Obtener la informacion de todas las tareas

    url: http://localhost:3030/v1/homeworks/
    method: GET
    
    Este devolvera todos los datos de las tareas 
    
    ejemplo:

            {
            "err": false,
            "result": [
                {
                    "idtareas": 3,
                    "usuarios_idusuarios": 2,
                    "titulo": null,
                    "descripcion": null,
                    "estatus_de_complecion": null,
                    "fecha_de_entrega": null,
                    "comentarios": null,
                    "responsable": null,
                    "tags": null
                },
                {
                    "idtareas": 4,
                    "usuarios_idusuarios": 2,
                    "titulo": null,
                    "descripcion": null,
                    "estatus_de_complecion": null,
                    "fecha_de_entrega": null,
                    "comentarios": null,
                    "responsable": null,
                    "tags": null
                },
             }
             
       ![imagen](https://user-images.githubusercontent.com/16170395/233159613-5ffecb33-4ab7-4227-98ab-406e48eb3441.png)
     
                          
 5.- Obtener informacion de una sola tarea es necesario enviar el identificador
 
      url : http://localhost:3030/v1/homeworks/4
      method:GET
   Este devolvera una sola tarea
     ejemplo:
     
         {
          "err": false,
          "result": [
              {
                  "idtareas": 4,
                  "titulo": null,
                  "descripcion": null,
                  "estatus_de_complecion": null,
                  "fecha_de_entrega": null,
                  "comentarios": null,
                  "responsable": null,
                  "tags": null
              }
          ]
      }
      
      ![imagen](https://user-images.githubusercontent.com/16170395/233159485-a00bdcb5-eafa-4e9c-8661-232a39aca89e.png)

      
            
6.-    Crear una tarea 

       url: http://localhost:3030/v1/homeworks/
       method: POST
       body: {
            "Titulo":"tarea Gela",
            "Descripcion":"Descripcion gela",
            "EstatusDeComplecion":"complecion",
            "FechaDeEntrega":"2023-10-10 11:13:10",
            "idusuario":1
        }
        
        Los campos necesarios son Titulo,Descripcion, EstatusDeComplecion, FechaDeEntrega, idusuario 
        y los campos opcionales son Comentarios, Responsable, Tags; al insertar una nueva tarea 
        nos volvera el id del registro
        
       ![imagen](https://user-images.githubusercontent.com/16170395/233158844-b450b892-2615-46c0-842a-ed68dd5d070b.png)

   
   
7.- Actualizar un registro es necesario enviar el **idtareas** de la tarea y **idusuario**  como identificadores del registro estos seran obligatorios
    y los campos disponibles a  actualizar son **Titulo, Descripcion, EstatusDeComplecion, FechaDeEntrega, Comentarios, Responsable, Tags.**
      
      url: http://localhost:3030/v1/homeworks/
      method: PUT
      body: {    
          "idtareas":3,
          "Titulo":"mi tarea gela update",
          "idusuario":2
      }
      
      ![imagen](https://user-images.githubusercontent.com/16170395/233158563-8936f9ae-830d-4bcb-b9f5-593f5dca6982.png)

      
      
8.- Eliminar un registro es necesario enviar el **idtareas** y **idusuario** como datos obligatorios

  url: http://localhost:3030/v1/homeworks/
     method:DELETE
     body: {
            "idtareas":3,
            "idusuario":2
           }
      
      
![imagen](https://user-images.githubusercontent.com/16170395/233158179-2c6cbe26-923b-4c74-83e8-7f65a562a35b.png)


   
                    
