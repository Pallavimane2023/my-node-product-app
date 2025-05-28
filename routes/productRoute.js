const express = require('express');
const verifyToken = require('../middleware/authMiddleware');
const {addProduct,getProductById,getProducts,updateProductById,deleteProductById} = require('../controllers/productController');

const router = express.Router();


router.post('/product',verifyToken, addProduct);
router.get('/products',verifyToken, getProducts);
router.get('/product/:id',verifyToken,getProductById);
router.put('/product/:id',updateProductById);
router.delete('/product/:id',deleteProductById);


module.exports = router;