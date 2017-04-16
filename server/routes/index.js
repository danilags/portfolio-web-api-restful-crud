const express = require('express');
const router = express.Router();
const controller = require('../controllers/memo')

router.get('/memo', controller.getAll)

router.post('/memo', controller.createMemo)

router.put('/memo/:id', controller.updateMemo)

router.delete('/memo/:id', controller.deleteMemo)

module.exports = router
