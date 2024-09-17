const router = require('express').Router();
const basementRoutes = require('./basement-routes');
const moneyRoutes = require('./money-routes');
const userRoutes = require('./user-routes');

router.use('/basement', basementRoutes);
router.use('/money', moneyRoutes);
router.use('/user', userRoutes);

module.exports = router;