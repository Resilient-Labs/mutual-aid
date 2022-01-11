module.exports = {
  getHouse: async (req, res) => {
    try {
      console.log("working house")
      res.render("house.ejs");
    } catch (err) {
      console.log('herror is happening')
      console.log(err);
    }
  }
};
