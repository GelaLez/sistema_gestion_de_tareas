var ctrl = require('../controllers/homeworks')
var express = require('express')
var router = express.Router()

const { body, validationResult } = require('express-validator');

router.get('/', GetAllHomework)
router.post('/', body('Titulo').isLength({ min: 2, max: 50 }),
    body('Descripcion').isLength({ min: 2, max: 50 }),
    body('EstatusDeComplecion').isLength({ min: 2, max: 50 }),
    body('FechaDeEntrega').isLength({ min: 2, max: 50 }),
    body('Comentarios').optional().isLength({ min: 2, max: 50 }),
    body('Responsable').optional().isLength({ min: 2, max: 50 }),
    body('Tags').optional().isLength({ min: 2, max: 50 }), sendEmail)

function GetAllHomework(req, res) {
    try {
        ctrl.GetAllHomework()
            .then(function (result) {
                res.json(result)
            })
    } catch (error) {
        res.status(404).send('Hubo un error, intentelo mas tarde');
    }
}

function sendEmail(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    ctrl.sendEmail(d).then(function (result) {
        res.json(result)
    })
}

module.exports = router;
