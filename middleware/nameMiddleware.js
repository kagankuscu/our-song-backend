const singerNameCapitalize = (req, res, next) => {
  const body = req.body;
  body.Singer = body.Singer.toLowerCase();
  req.body.Singer = replaceFirstLetter(body.Singer);
  next();
};

const songNameCapitalize = (req, res, next) => {
  const body = req.body;
  body.SongName = body.SongName.toLowerCase();
  req.body.SongName = replaceFirstLetter(body.SongName);
  next();
};

function replaceFirstLetter(body) {
  return body.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
}

module.exports = {
  singerNameCapitalize,
  songNameCapitalize,
};
