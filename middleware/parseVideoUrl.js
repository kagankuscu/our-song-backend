const parseYoutubeVideoUrl = (req, res, next) => {
  const videoUrl = req.body.Url;
  const youtube = 'https://www.youtube.com/watch?';
  const seperateQuery = videoUrl.split('&')[0];
  let getVideoId = seperateQuery.split('?')[1];
  if (getVideoId === undefined) {
    getVideoId = `v=${seperateQuery.split('.be/')[1]}`;
  }
  req.body.Url = `${youtube}${getVideoId}`;
  console.log(`${youtube}${getVideoId}`);
  next();
};

module.exports = {
  parseYoutubeVideoUrl,
};
