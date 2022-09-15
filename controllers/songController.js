const songs = require('../data');

// @desc Get Songs
// @route GET /songs
// @access Private
const getSongs = (req, res) => {
  res
    .status(200)
    .json({ status: res.statusCode, result: songs, length: songs.length });
};

// @desc Get Song
// @route GET /songs/songId/:id
// @access Private
const getSongById = (req, res) => {
  res
    .status(200)
    .json({ status: res.statusCode, result: songs[req.params.id - 1] });
};

// @desc Get Songs By Singer Name
// @route GET /songs/singerName/:name
// @access Private
const getSongsBySingerName = (req, res) => {
  const paramsSingerName = req.params.name.toLowerCase();
  const filter = songs.filter(
    (song) => song.Singer.toLowerCase() === paramsSingerName
  );
  res
    .status(200)
    .json({ status: res.statusCode, result: filter, length: filter.length });
};

// @desc Get Songs By Singer Name
// @route GET /songs/singerName/:name
// @access Private
const getSongByName = (req, res) => {
  const paramsSongName = req.params.name.toLowerCase();
  const filter = songs.filter(
    (song) => song.SongName.toLowerCase() === paramsSongName
  );
  res
    .status(200)
    .json({ status: res.statusCode, result: filter, length: filter.length });
};

// @desc Get Songs By Singer Name
// @route GET /songs/singerName/:name
// @access Private
const getSongsByWhoLike = (req, res) => {
  const paramsNameWhoLike = req.params.name.toLowerCase();
  const filter = songs.filter(
    (song) => song.WhoLike.toLowerCase() === paramsNameWhoLike
  );
  res
    .status(200)
    .json({ status: res.statusCode, result: filter, length: filter.length });
};

// @desc Create New Song
// @route POST /songs
// @access Private
const createNewSong = (req, res) => {
  const newSong = req.body;
  if (!newSong.Singer) {
    res.status(400);
    throw new Error('Please add a new song field.');
  }
  songs.push(newSong);
  res
    .status(201)
    .json({ status: res.statusCode, result: newSong, length: newSong.length });
};

// @desc Delete song by id
// @route DELETE /songs/songId:id
// @access Private
const deleteSongById = (req, res) => {
  const item = songs[req.params.id - 1];
  const index = songs.indexOf(item);
  if (index > -1) {
    songs.splice(index, 1);
  }
  res
    .status(200)
    .json({ status: res.statusCode, result: item, length: item.length });
};

module.exports = {
  getSongs,
  getSongById,
  getSongsBySingerName,
  getSongByName,
  getSongsByWhoLike,
  createNewSong,
  deleteSongById,
};
