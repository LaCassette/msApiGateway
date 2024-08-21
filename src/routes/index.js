const router = require('express').Router();

const auth = require('../routes/api.auth.routes');

const defaultRoutes = [
    {
        path: "/auth",
        routes: auth,
    }
];

defaultRoutes.forEach((r) => {
    router.use(r.path, r.routes);
});

export default router;