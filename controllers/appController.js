// @desc Get Main
// @route GET /
// @access Private
const main = (_, res) => {
  res.json({ status: `${res.statusCode}`, message: 'Hello Everyone.' });
};

// @desc Get 404
// @route GET *
// @access Private
const pageNotFound = (_, res) => {
  res
    .status(404)
    .json({ status: `${res.statusCode}`, message: 'Page Not Found' });
};

module.exports = {
  main,
  pageNotFound,
};
