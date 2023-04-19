const helpers = require('../modules/helpers');

module.exports = {
    GetAllHomeWork: GetAllHomeWork,
    GetAHomework: GetAHomework,
    PostNewHomework: PostNewHomework
}

function GetAllHomeWork(d) {
    var query = `
    select 
        usuarios_idusuarios,
        titulo,
        descripcion,
        estatus_de_complecion,
        fecha_de_entrega,
        comentarios,
        responsable,
        tags
    from tareas
    `

    return helpers.mysqlQuery('GET', conn_mysql, query, d)
}

function GetAHomework(idtareas) {
    var query = `
    select 
        idtareas,
        usuarios_idusuarios,
        titulo,
        descripcion,
        estatus_de_complecion,
        fecha_de_entrega,
        comentarios,
        responsable,
        tags
    from tareas
    where usuarios_idusuarios = `+ idtareas + `
    `
    return helpers.mysqlQuery('GET', conn_mysql, query, d)
}

function PostNewHomework(NewHomework) {
    var query = `
       insert into tareas(usuarios_idusuarios,titulo,descripcion,estatus_de_complecion,fecha_de_entrega,comentarios,responsable,tags) 
       values(@usuarios_idusuarios,@titulo,@descripcion,@estatus_de_complecion,@fecha_de_entrega,@comentarios,@responsable,@tags)
    `
    return helpers.mysqlQuery('POST', conn_mysql, query, d)
}

