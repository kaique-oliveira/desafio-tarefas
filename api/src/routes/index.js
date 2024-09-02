const { Router } = require('express');
const taskRoute = require('./taskRoute');

const router = Router();

router.use('/task', taskRoute);

module.exports = router;
