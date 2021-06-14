const {Router} = require('express');
const router = Router();

const getProducts = require('../controllers/getProducts.conroller')
const sendSomething = require('../controllers/sendSomething.controller')

// routes
router.get("/getProducts", getProducts.getProducts);
router.post("/sendSomething", sendSomething.sendSomething);


module.exports = router;