const express = require('express');
const productctrl = require('../controllers/productctrl')
const authctrl = require('../controllers/authctrl')

const router = express.Router();

router.get('/product', authctrl.checktokenctrl, productctrl.listproducttctrl);
router.get('/product/:field/:fill', authctrl.checktokenctrl, productctrl.getproductctrl);
router.delete('/product/:field/:fill', authctrl.checktokenctrl, productctrl.delproductctrl);
router.patch('/product/:field/:fill', authctrl.checktokenctrl, productctrl.patchproductctrl);
router.post('/product', authctrl.checktokenctrl, productctrl.newproductctrl);

module.exports = router;