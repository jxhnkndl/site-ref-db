const { Site } = require('../models');

module.exports = {
  async getAllSites(req, res) {
    try {
      // Return sites sorted with newest additions at the top
      const allSites = await Site.find({}).sort({ createdAt: -1 });
      res.status(200).json(allSites);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Server Error', error: error });
    }
  },

  async createSite(req, res) {
    console.log(123);
    try {
      const newSite = await Site.create(req.body);

      console.log(newSite)

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
