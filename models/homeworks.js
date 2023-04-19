const helpers = require('../modules/helpers');

module.exports = {
    GetAllHomeWork: GetAllHomeWork,
    GetAHomework: GetAHomework,
    PostNewHomework: PostNewHomework,
    UpdateHomework: UpdateHomework,
    DeleteHomework: DeleteHomework
}

function GetAllHomeWork(d) {
    let query = `
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
    `

    return helpers.mysqlQuery('GET', conn_mysql, query, d)
}

function GetAHomework(idHomework) {
    let query = `
    select 
        idtareas,        
        titulo,
        descripcion,
        estatus_de_complecion,
        fecha_de_entrega,
        comentarios,
        responsable,
        tags
    from tareas
    where idtareas = `+ idHomework
    return helpers.mysqlQuery('GET', conn_mysql, query, idHomework)
}

function PostNewHomework(NewHomework) {
    let query = `
       insert into tareas(
        usuarios_idusuarios,
        titulo,
        descripcion,
        estatus_de_complecion,
        fecha_de_entrega,
        comentarios,
        responsable,
        tags) 
       values('`+
        NewHomework.idusuario + `','` +
        NewHomework.Titulo + `','` +
        NewHomework.Descripcion + `','` +
        NewHomework.EstatusDeComplecion + `','` +
        NewHomework.FechaDeEntrega + `','` +
        NewHomework.Comentarios + `','` +
        NewHomework.Responsable + `','` +
        NewHomework.Tags + `')
    `
    return helpers.mysqlQuery('POST', conn_mysql, query, NewHomework)
}


function UpdateHomework(homeworks) {
    let query = `UPDATE tareas SET `

    if (homeworks['Titulo']) {
        query += `titulo='${homeworks['Titulo']}'`
    }

    if (homeworks['Descripcion']) {
        query += `descripcion='${homeworks['Descripcion']}'`
    }

    if (homeworks['EstatusDeComplecion']) {
        query += `estatus_de_complecion='${homeworks['EstatusDeComplecion']}'`
    }

    if (homeworks['FechaDeEntrega']) {
        query += `fecha_de_entrega='${homeworks['FechaDeEntrega']}'`
    }

    if (homeworks['Comentarios']) {
        query += `comentarios='${homeworks['Comentarios']}'`
    }

    if (homeworks['Responsable']) {
        query += `responsable='${homeworks['Responsable']}'`
    }

    if (homeworks['Tags']) {
        query += `tags='${homeworks['Tags']}'`
    }

    query += ` WHERE idtareas=${homeworks['idtareas']} AND usuarios_idusuarios=${homeworks['idusuario']}`

    return helpers.mysqlQuery('PUT', conn_mysql, query, homeworks)
}

function DeleteHomework(objectDeleteHomework) {
    let query = `
        DELETE FROM tareas WHERE idtareas = '${objectDeleteHomework.idtareas}' AND usuarios_idusuarios = '${objectDeleteHomework.idusuario}'`

    return helpers.mysqlQuery('DELETE', conn_mysql, query, objectDeleteHomework)
}