const ctrl = require('../controllers/homeworks')
const express = require('express')
const router = express.Router()

const { body, validationResult } = require('express-validator');

router.get('/', GetAllHomework)
router.get('/:idHomework', GetAHomework)

router.post('/', body('idusuario').isLength({ min: 1, max: 10 }),
    body('Titulo').isLength({ min: 2, max: 50 }),
    body('Descripcion').isLength({ min: 2, max: 50 }),
    body('EstatusDeComplecion').isLength({ min: 2, max: 50 }),
    body('FechaDeEntrega').isLength({ min: 2, max: 50 }),
    body('Comentarios').optional().isLength({ min: 2, max: 50 }),
    body('Responsable').optional().isLength({ min: 2, max: 50 }),
    body('Tags').optional().isLength({ min: 2, max: 50 }), PostNewHomework)

router.put('/', body('idtareas').isLength({ min: 1, max: 10 }),
    body('idusuario').isLength({ min: 1, max: 10 }),
    body('Titulo').optional().isLength({ min: 2, max: 50 }),
    body('Descripcion').optional().isLength({ min: 2, max: 50 }),
    body('EstatusDeComplecion').optional().isLength({ min: 2, max: 50 }),
    body('FechaDeEntrega').optional().isLength({ min: 2, max: 50 }),
    body('Comentarios').optional().isLength({ min: 2, max: 50 }),
    body('Responsable').optional().isLength({ min: 2, max: 50 }),
    body('Tags').optional().isLength({ min: 2, max: 50 }), UpdateHomework)

router.delete('/', body('idtareas').isLength({ min: 1, max: 10 }),
    body('idusuario').isLength({ min: 1, max: 10 }), DeleteHomework)


function GetAllHomework(req, res) {
    try {
        ctrl.GetAllHomework().then(function (result) {
            res.json(result)
        })
    } catch (error) {
        res.status(404).send('Hubo un error, intentelo mas tarde');
    }
}

function GetAHomework(req, res) {
    let idHomework = req.params.idHomework
    try {
        ctrl.GetAHomework(idHomework).then(function (result) {
            res.json(result)
        })
    } catch (error) {
        res.status(404).send('Hubo un error, intentelo mas tarde');
    }
}

function PostNewHomework(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let objectNewHomework = req.body

    try {
        ctrl.PostNewHomework(objectNewHomework).then(function (result) {
            res.json(result)
        })
    } catch (error) {
        res.status(404).send('Hubo un error, intentelo mas tarde');
    }
}

function UpdateHomework(req, res) {
    let objectUpdateHomework = req.body

    try {
        ctrl.UpdateHomework(objectUpdateHomework).then(function (result) {
            res.json(result)
        })
    } catch (error) {
        res.status(404).send('Hubo un error, intentelo mas tarde');
    }
}

function DeleteHomework(req, res) {
    let objectDeleteHomework = req.body
    try {
        ctrl.DeleteHomework(objectDeleteHomework).then(function (result) {
            res.json(result)
        })
    } catch (error) {
        res.status(404).send('Hubo un error, intentelo mas tarde');
    }
}

module.exports = router;