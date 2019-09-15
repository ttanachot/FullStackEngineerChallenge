const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500).send({ error: { originalError: err, message: err.message } });
};

export default errorHandler;
