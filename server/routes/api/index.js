const router = require('express').Router();
const siteRoutes = require('./site-routes');

router.use('/sites', siteRoutes);

module.exports = router;