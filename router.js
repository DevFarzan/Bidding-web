const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });
const listAgencyForm = require('./controllers/listadd');
const getAllBillboard = require('./controllers/getallbillboard');
const biddingHistoryMaintene = require('./controllers/biddingHistoryMaintene');
const bidderBillboardBooked = require('./controllers/bidderBillboardBooked');



module.exports = function (app) {

  //post routes
  //app.post('/signin',requireSignin,  Authentication.signin);
  app.post('/signup', Authentication.signup);
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/getUserData', Authentication.getUserData);

  // app.post('/changeStatus', Authentication.changeStatus);

  app.post('/listadd', listAgencyForm.postAddData);

  app.post('/getspecificbillboard', getAllBillboard.getspecificBillboard);


  // app.post('/getspecificBiddingbillboard', biddingBillboardData.getspecificBiddingbillboard);
  app.post('/biddingHistory', biddingHistoryMaintene.biddingHistory);
  app.post('/getspecificBiddingbillboardHistory', biddingHistoryMaintene.getspecificBillboardBiddingHistory);
  app.post('/bidderBillboardBooked', bidderBillboardBooked.postBidderBookBillboard);
  app.post('/getspecificBookedBidderbillboard', bidderBillboardBooked.getspecificBookedBidderbillboard);

  // app.post('/biddingBillboardDelete', biddingBillboardData.deletebiddingBillboard);




  //get routes

  app.get('/getemails', Authentication.getemails);
  // app.get('/getcompanyname', Authentication.getcompanyname);
  app.get('/getalluser', Authentication.getAllUsers);

  app.get('/getbillboard', getAllBillboard.getBillboard);

  // app.get('/getbiddingbillboard', biddingBillboardData.getBiddingbillboard);
  app.get('/getallbidderBookbillboard', bidderBillboardBooked.getBidderBookebillboard);


  //app.get('/getprofile',requireAuth, getprofile.getProfile)
}
