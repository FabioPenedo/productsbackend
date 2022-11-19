import { Router } from 'express';

import * as productController from '../controllers/productController';

const router = Router();

router.post('/register', productController.registerProducts);
router.get('/list/', productController.productList);
router.get('/list/:id', productController.listById);
router.put('/uptade/:id', productController.changeProducts);
router.delete('/delete/:id', productController.deleteProduct);


export default router;