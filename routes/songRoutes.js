const express = require('express');
const {
  getSongs,
  getSongById,
  getSongsBySingerName,
  createNewSong,
  deleteSongById,
  getSongByName,
  getSongsByWhoLike,
} = require('../controllers/songController');
const router = express.Router();

router.route('/').get(getSongs).post(createNewSong);
router.route('/songId/:id').get(getSongById).delete(deleteSongById);
router.get('/singerName/:name', getSongsBySingerName);
router.get('/songName/:name', getSongByName);
router.get('/whoLike/:name', getSongsByWhoLike);

module.exports = router;
