import jwt from "jsonwebtoken";

export const verifyAccessToken = (req, res, next) => {
  const authorization = req.headers.authorization.trim().split(" ")[1];

  if (!authorization) {
    req.tokenStatus = "missing";
    return next(); 
  }


  jwt.verify(authorization, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      req.tokenStatus = "expired"; 
    } else {
      req.tokenStatus = "valid";
      req.user = decoded;
    }
    next(); 
  });


};

// if (!authorization) return res.status(error.status || 403).json({ message: error.message });

// jwt.verify(authorization, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {

//     if (error) return res.status(error.status || 403).json({ message: error.message });

//     req.user = decoded
// })

// next();