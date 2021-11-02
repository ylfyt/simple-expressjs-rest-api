import Express from "express";

const router = Express.Router();

router.get('/', (req, res) => {
    res.send('Student end point');
});

export default router;