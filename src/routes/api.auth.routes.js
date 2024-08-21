const router = require('express').Router();

const AuthController = require('../controller/AuthController');
const authController = new AuthController();

router.post('/login', async (req, res) => {
    const opts = {};

    res.json(await authController.login(opts));
});

router.post('/register', async (req, res) => {
    const opts = {};

    res.json(await authController.register(opts));
});

router.post('/check', async (req, res) => {
    const opts = {};

    res.json(await authController.check(opts));
});

module.exports = router;