const express = require('express');
const {
  getSongs,
  getSongById,
  getSongsBySingerName,
  createNewSong,
  deleteSongById,
  uptadeSongById,
  getSongByName,
  getSongsByWhoLike,
} = require('../controllers/songController');
const {
  singerNameCapitalize,
  songNameCapitalize,
} = require('../middleware/nameMiddleware');
const { parseYoutubeVideoUrl } = require('../middleware/parseVideoUrl');
const router = express.Router();

router
  .route('/')
  .get(getSongs)
  .post(
    [parseYoutubeVideoUrl, singerNameCapitalize, songNameCapitalize],
    createNewSong
  );
router
  .route('/songId/:id')
  .get(getSongById)
  .put(uptadeSongById)
  .delete(deleteSongById);
router.get('/singerName/:name', getSongsBySingerName);
router.get('/songName/:name', getSongByName);
router.get('/whoLike/:name', getSongsByWhoLike);

module.exports = router;
