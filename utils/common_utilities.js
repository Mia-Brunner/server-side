  
// middleware functions
const userAuthenticated = function (req, res, next) {
  console.log("in userAuthenticated got req.user", req.user)
  console.log("in userAuthenticated got req.session", req.session)
  console.log("in userAuthenticated got req.sessionID", req.sessionID)
  if (req.isAuthenticated()) {
      next();
  } else {
      res.sendStatus(403);
  }
}


module.exports = {
  userAuthenticated
};
