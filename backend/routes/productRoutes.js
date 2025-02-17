// routes/productRoutes.js
router.get('/products', authMiddleware, productController.getAllProducts);
router.post('/products', authMiddleware, requireRole('SELLER'), productController.createProduct);