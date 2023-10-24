const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api/index');

router.use('/api', apiRoutes);

// Serve React app to client in production
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;