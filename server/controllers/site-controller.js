const { Site } = require('../models');

module.exports = {
  async getAllSites(req, res) {
    try {
      const allSites = await Site.find({});
      res.status(200).json(allSites);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Server Error', error: error });
    }
  },

  async createSite(req, res) {
    try {
      const newSite = await Site.create(req.body);

      if (!newSite) {
        return res.status(400).json({ msg: 'Something went wrong' });
      }

      res.status(200).json(newSite);
    } catch (error) {
      console.error(error)
      res.status(500).json({ msg: 'Server Error', error: error });
    }
  }
};
