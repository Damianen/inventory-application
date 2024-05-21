import categorySchema from '../db/category.js'
import mongoDB from '../db/db.js'
import { Router } from 'express'

const router = Router();

router.get('/categories', (req, res, next) => {
    res.render('categories.pug');
});

router.get('/categories/create', (req, res, next) => {
    res.render('createCategory.pug')
});

export default router;