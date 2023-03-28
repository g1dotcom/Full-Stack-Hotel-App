export const register = async (req, res, next) => {
  try {
    const newUser = new User(req.body);
  } catch (error) {
    next(err);
  }
};
