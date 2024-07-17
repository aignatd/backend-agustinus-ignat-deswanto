const express = require('express');
const customerctrl = require('../controllers/customerctrl')
const authctrl = require('../controllers/authctrl')

const router = express.Router();

router.post('/transaction', authctrl.checktokenctrl, customerctrl.newtransactionctrl);

router.get('/transaction', authctrl.checktokenctrl, customerctrl.listtransctrl);
router.get('/transaction/:field/:fill', authctrl.checktokenctrl, customerctrl.gettransctrl);
router.get('/item', authctrl.checktokenctrl, customerctrl.listitemctrl);
router.get('/item/:field/:fill', authctrl.checktokenctrl, customerctrl.getitemctrl);

module.exports = router;