import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(403).send({ message: "You are not authenticated!" });
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return res.status(401).send({ message: "Token is not valid!" });
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).send({ message: "You are not Authorized!" });
    }
  });
};
