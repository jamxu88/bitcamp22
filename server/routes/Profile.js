import express from 'express';

let router = express.Router();
import cors from 'cors';
const allowedOrigins = ['bitcamp2022.herokuapp.com',
                      'bitcamp2022api.herokuapp.com'];
router.use(cors({
    origin: function(origin, callback){
      if(!origin) return callback(null, true);
      if(allowedOrigins.indexOf(origin) === -1){
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  
  }));
router.use(function (req, res, next) {
    next();
});

router.route("/profile").get((req, res) => {
    res.send(JSON.stringify(req.oidc.user));
});

export default router;
