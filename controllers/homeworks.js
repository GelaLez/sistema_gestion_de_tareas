var fs = require('fs');
var path = require('path');
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
                .then(function (resolve) {
                    _resolve(resolve)
                })
        } catch (error) {
            _reject(error)
        }
    })
}

function GetAHomework(id) {
    return new Promise(function (_resolve, _reject) {
        try {
            Models.GetAHomework(id)
                .then(function (resolve) {
                    _resolve(resolve)
                })
        } catch (error) {
            _reject(error)
        }
    })
}

function PostNewHomework(homeworks) {
    return new Promise(function (_resolve, _reject) {
        try {
            Models.PostNewHomework(homeworks)
                .then(function (resolve) {
                    _resolve(resolve)
                })
        } catch (error) {
            _reject(error)
        }
    })
}

