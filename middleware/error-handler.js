const errorHandlerMiddleware = async (err, req, res, next) => {
  return res.status(500).json({ msg: 'Something went wrog, try again later' });
};

module.exports = errorHandlerMiddleware;
