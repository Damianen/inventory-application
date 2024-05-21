import ItemSchema from "../db/item.js";
import mongoDB from "../db/db.js";
import { Router } from "express";

const router = Router();

router.get('/items', (req, res, next) => {
    res.render('items.pug');
});

router.get('/items/create', (req, res, next) => {
    res.render('createItem.pug');
});

export default router;