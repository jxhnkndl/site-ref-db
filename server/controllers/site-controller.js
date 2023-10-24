const { Site } = require('../models');

module.exports = {
  async getAllSites(req, res) {
    try {
      const allSites = await Site.find({});
      console.log(allSites);
      res.status(200).json(allSites);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Server Error', error: error });
    }
  },
};
