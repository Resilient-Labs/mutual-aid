
module.exports = {
  getHouse: async (req, res) => {
    try {

      res.render("house.ejs");
    } catch (err) {
      console.log(err);
    }
  },

};
