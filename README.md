# sistema_gestion_de_tareas


El sistema de gestion de tareas tiene como proposito el que un usuario pueda visualizar, 
agregar, editar o eliminar las tareas que quiera registrar en su dia a dia. 
Y debido a que el sistema es utilizado por varios usuarios, es necesario que la
API identifique al usuarioo session que esta solicitando.


Preparativos previos

debes crear una base de datos con el nombre tareas y agregar las siguientes tablas



`Table mydb.usuarios`

`CREATE TABLE IF NOT EXISTS usuarios (
  idusuarios INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45) NULL,
  token VARCHAR(45) NULL,
  activo VARCHAR(45) NULL,
  PRIMARY KEY (idusuarios),
  UNIQUE INDEX idusuarios_UNIQUE (idusuarios ASC) VISIBLE)
ENGINE = InnoDB;
`

 `Table mydb.tareas`

`CREATE TABLE IF NOT EXISTS tareas (
  idtareas INT NOT NULL AUTO_INCREMENT,
  usuarios_idusuarios INT NOT NULL,
  titulo VARCHAR(45) NULL,
  descripcion VARCHAR(45) NULL,
  estatus_de_complecion VARCHAR(45) NULL,
  fecha_de_entrega VARCHAR(45) NULL,
  comentarios VARCHAR(45) NULL,
  responsable VARCHAR(45) NULL,
  tags VARCHAR(45) NULL,
  PRIMARY KEY (idtareas),
  UNIQUE INDEX idtareas_UNIQUE (idtareas ASC) VISIBLE,
  INDEX fk_tareas_usuarios_idx (usuarios_idusuarios ASC) VISIBLE,
  CONSTRAINT fk_tareas_usuarios
    FOREIGN KEY (usuarios_idusuarios)
    REFERENCES mydb.usuarios (idusuarios)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;`


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
 5.- Obtener informacion de una sola tarea
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
        
        ejemplo:
        
        {
            "err": false,
            "insertId": 11
        }
   
   
7.- Actualizar un registro es necesario enviar el **idtareas** de la tarea y **idusuario**  como identificadores del registro estos seran obligatorios
    y los campos disponibles a  actualizar son **Titulo, Descripcion, EstatusDeComplecion, FechaDeEntrega, Comentarios, Responsable, Tags.**
      
      url: http://localhost:3030/v1/homeworks/
      method: PUT
      body: {    
          "idtareas":3,
          "Titulo":"mi tarea gela update",
          "idusuario":2
      }
      
      
8.- Eliminar un registro es necesario enviar el **idtareas** y **idusuario** como datos obligatorios

     url: http://localhost:3030/v1/homeworks/
     method:DELETE
     body: {
            "idtareas":3,
            "idusuario":2
           }
      
                    
