var Models = require('../models/homeworks')

module.exports = {
    GetAllHomework: GetAllHomework,
    GetAHomework: GetAHomework,
    PostNewHomework: PostNewHomework,
    UpdateHomework: UpdateHomework,
    DeleteHomework: DeleteHomework
}

function GetAllHomework() {
    return new Promise(function (_resolve, _reject) {
        try {
            Models.GetAllHomeWork()
                .then(function (result) {
                    _resolve(result)
                })
        } catch (error) {
            _reject(error)
        }
    })
}

function GetAHomework(idHomework) {
    return new Promise(function (_resolve, _reject) {
        try {
            Models.GetAHomework(idHomework)
                .then(function (result) {
                    _resolve(result)
                })
        } catch (error) {
            _reject(error)
        }
    })
}

function PostNewHomework(homeworks) {
    return new Promise(function (_resolve, _reject) {
        try {
            homeworks.Comentarios = homeworks.Comentarios != undefined ? homeworks.Comentarios : ''
            homeworks.Responsable = homeworks.Responsable != undefined ? homeworks.Responsable : ''
            homeworks.Tags = homeworks.Tags != undefined ? homeworks.Tags : ''

            Models.PostNewHomework(homeworks)
                .then(function (result) {
                    _resolve(result)
                })

        } catch (error) {
            _reject(error)
        }
    })
}


function UpdateHomework(homeworks) {
    return new Promise(function (_resolve, _reject) {
        try {
            Models.UpdateHomework(homeworks)
                .then(function (result) {
                    _resolve(result)
                })
        } catch (error) {
            _reject(error)
        }
    })
}

function DeleteHomework(objectDeleteHomework) {
    return new Promise(function (_resolve, _reject) {
        if (objectDeleteHomework.idtareas != undefined && objectDeleteHomework.idusuario) {
            try {
                Models.DeleteHomework(objectDeleteHomework)
                    .then(function (result) {
                        _resolve(result)
                    })
            } catch (error) {
                _reject(error)
            }
        } else {
            _resolve({ err: true, result: 'es necesario un idtareas y un idusuario' })
        }
    })
}