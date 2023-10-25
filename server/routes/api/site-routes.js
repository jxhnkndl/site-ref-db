const router = require('express').Router();
const {
  getAllSites,
  createSite,
} = require('../../controllers/site-controller');

router.route('/').get(getAllSites).post(createSite);

module.exports = router;
