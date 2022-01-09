module.exports = { //Note for DevOps: Thid id rendiring the home page index page as a place holder but this is meant for what front-end called landing page of our app
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
};
