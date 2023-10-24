const router = require('express').Router();
const {
  getAllSites
} = require('../../controllers/site-controller');

router.route('/').get(getAllSites);

module.exports = router;