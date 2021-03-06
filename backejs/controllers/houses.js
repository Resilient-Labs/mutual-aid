const House = require("../models/House");
const Profile = require("../models/UserProfile");
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);
const Transactions = require("../models/Transactions");
const Messages = require("../models/Messages");
const { now } = require('moment');
const moment = require('moment');
var ObjectId = require('mongodb').ObjectID;
// const { get } = require('../models/house');

module.exports = {
  getHouse: async (req, res) => {
    console.log('zebra', ObjectId(req.params.zebra))
    houseId = ObjectId(req.params.zebra) //DO NOT CHANGE THIS LINE!!!!
    console.log('HouseId', houseId)

    try {

      const house = await House.find({ _id: houseId })
      const messages = await Messages.find()
      const transactions = await Transactions.find({ house: houseId })
      const profile = await Profile.find({ user: req.user.id });

      let startDate = null
      let momentStartDate = null
      let paymentDate = null
      console.log(house)
      for (var i = 0; i < house.length; i++) {
        startDate = new Date(house[i].startDate)
        momentStartDate = moment().date(startDate.getFullYear())
      }
      const currentDate = moment()

      console.log('line 32', startDate)
      if (currentDate.isAfter(startDate)) {
        console.log('current date is after start date')
        const dayOfMonth = startDate.getDate()
        paymentDate = moment().date(dayOfMonth)
        if (paymentDate.isBefore(currentDate)) {
          console.log('payment date is before currentDate')
          paymentDate = paymentDate.add(1, 'month')
        }
      }


      else {
        paymentDate = startDate
      }

      let dayOfYear = startDate.getFullYear()
      console.log('startDate', startDate)
      console.log('dayOfYear', dayOfYear)
      // let endOfCycle = moment().date(dayOfYear)
      let endOfCycle = moment(startDate)
      console.log('endOfCycle', endOfCycle)
      endOfCycle = endOfCycle.add(1, 'years')
      let cycleOver = false

      if (paymentDate.isAfter(endOfCycle)) {
        countDown = 0
        cycleOver = true
      }
      let millisecondsPerDay = 86400 * 1000
      let countDown = Math.floor((paymentDate - currentDate) / millisecondsPerDay)

      console.log('when does the cycle end?', endOfCycle,
        'is the cycle over?', cycleOver)
      console.log('countDown:', countDown,
        'startDate', startDate,
        'endOfCycle', endOfCycle,
        'payment date', paymentDate,
        'curentDate', currentDate)

      endOfCycle = endOfCycle.format('MM-DD-YYYY')

      res.render("house.ejs", {
        user: req.user,
        messages: messages,
        house: house,
        transactions: transactions,
        endOfCycle,
        countDown,
        cycleOver,
        startDate: moment(startDate).format('MM-DD-YYYY'),
        paymentDate: moment(paymentDate).format('MM-DD-YYYY'),
      });
    } catch (err) {
      console.log('herror is happening')
      console.log(err);
    }
  },
  publicHouses: async (req, res) => {
    try {
      const house = await House.find();
      res.render('join-house.ejs', { house: house });
    } catch (err) {
      console.log('herror is happening');
      console.log(err);
    }
  },
  joinHouse: async (req, res) => {
    try {
      let houseId = ObjectId(req.body.houseId); //this is house id
      const house = await House.findOneAndUpdate({
        "_id": houseId
      }, {
        $push: { "members": [{ 'userId': req.user._id, 'firstName': req.user.firstName, 'lastName': req.user.lastName }] }
      });
      console.log("you've been added to the house!!");
    } catch (err) {
      console.log('herror is happening');
      console.log(err);
    }
  },
  createHouse: async (req, res) => {
    console.log('hey I am working I am creatting Houses')
    try {

      let adminId = ObjectId(req.user.id)

      await House.create({
        admin: adminId,
        houseName: req.body.houseName,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        monthlyDueDate: req.body.monthlyDueDate,
        amountOfMembers: req.body.amountOfMembers,
        monthlyPaymentAmount: req.body.monthlyPaymentAmount,
        monthlyPool: 0,
        members: [{ 'userId': adminId, 'firstName': req.user.firstName, 'lastName': req.user.lastName }]
      });
      console.log("Profile has been added!");
      res.redirect("/dashboard");
    } catch (err) {
      console.log(err);
    }
  },
  chooseHouse: async (req, res) => {
    try {
      await House.findOneAndUpdate(
        { _id: HouseID },
        {
          $inc: { members: userName },
        }
      );
      res.redirect(`/post`);
    } catch (err) {
      console.log(err);
    }
  },
  getCheckout: async (req, res) => {
    //stripe api
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: [{
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'mutual aid payment',
              metadata: {
                // 'house_id': req.body.houseID,
                'user_name': req.body.userName,
                'user_id': req.body.userId,
              }
            },
            unit_amount: req.body.paymentAmount * 100,

          },
          quantity: 1
        }
        ],
        success_url: `${process.env.SERVER_URL}/payment-success?amount=${req.body.paymentAmount}&houseid=${houseId}&username=${req.body.userName}`,
        cancel_url: `${process.env.SERVER_URL}/cancel.html`
      })
      res.redirect(session.url)
    } catch (e) {
      res.status(500).json({ error: e.message })
      console.log('checkout error')
    }
  },
  getPaymentSuccess: async (req, res) => {
    //records the payment in the db then redirect to house page
    try {
      console.log('hello')
      Transactions.create({
        paidBy: req.query.username,
        payment: req.query.amount,
        house: req.query.houseid,
        paidOn: Date.now()
      })
      res.redirect(`/house/${houseId}`)
    } catch (e) {
      res.status(500).json({ error: e.message })
      console.log('db save error')
    }
  },
  createMessage: async (req, res) => {
    try {
      const house = await House.find({ _id: req.body.houseId })
      await Messages.create({
        postedBy: req.body.postedBy,
        houseId: houseId,
        message: req.body.message,
        //houseName: req.body.houseName,
        paidOn: Date.now(),
      })
      console.log('house test', house)
      res.redirect('/house/' + houseId)
    } catch (e) {
      res.status(500).json({ error: e.message })
      console.log('error creating message')
    }
  },
  deleteMessage: async (req, res) => {
    try {
      await Messages.findOneAndDelete({
        user: req.user.id,
        message: req.body.message,
        paidOn: Date.now(),
        house: req.query.houseName
      })
      console.log('message deleted')
      res.json('Message deleted')
    } catch (e) {
      res.status(500).json({ error: e.message })
      console.log('error deleting message')
    }
  }
};
