const Song = require('../models/songModel');
const paginate = require('jw-paginate');

// @desc Get Songs
// @route GET /songs?page=1&sort=(Singer | SongName)&sort=(1 | -1)&pageSize=&pageDisplay=
// @access Private
const getSongs = async (req, res) => {
  let songs;
  if (!req.query.sort) {
    songs = await Song.find();
    songs.reverse();
  } else {
    songs = await Song.find().sort({
      [req.query.sort[0]]: req.query.sort[1],
    });
  }

  // get page from query params or default to first page
  const page = parseInt(req.query.page) || 1;

  // get pager object for specified page
  const pageSize = parseInt(req.query.pageSize) || 10;
  // get pager object for number to display
  const pageDisplay = parseInt(req.query.pageDisplay) || 10;

  const pager = paginate(songs.length, page, pageSize, pageDisplay);

  // get page of items from items array
  const pageOfItems = songs.slice(pager.startIndex, pager.endIndex + 1);

  res.status(200).json({
    status: res.statusCode,
    result: { pager, pageOfItems },
    length: songs.length,
  });
};

// @desc Get Song
// @route GET /songs/songId/:id
// @access Private
const getSongById = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);

    if (!song) {
      res.status(400);
    }
    res.status(200).json({ status: res.statusCode, result: song });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// @desc Get Songs By Singer Name
// @route GET /songs/singerName/:name
// @access Private
const getSongsBySingerName = async (req, res) => {
  const paramsSingerName = req.params.name.toLowerCase();
  const mongoDBRegex = new RegExp(paramsSingerName, 'i');
  const filter = await Song.find({ Singer: { $regex: mongoDBRegex } }).sort({
    SongName: 1,
  });
  res
    .status(200)
    .json({ status: res.statusCode, result: filter, length: filter.length });
};

// @desc Get Songs By Song Name
// @route GET /songs/songName/:name
// @access Private
const getSongByName = async (req, res) => {
  const paramsSongName = req.params.name.toLowerCase();
  const mongoDBRegex = new RegExp(paramsSongName, 'i');
  const filter = await Song.find({ SongName: { $regex: mongoDBRegex } }).sort({
    SongName: 1,
  });
  res
    .status(200)
    .json({ status: res.statusCode, result: filter, length: filter.length });
};

// @desc Get Songs By WhoLike Name
// @route GET /songs/whoLike/:name
// @access Private
const getSongsByWhoLike = async (req, res) => {
  const paramsNameWhoLike = req.params.name.toLowerCase();
  const mongoDBRegex = new RegExp(paramsNameWhoLike, 'i');
  const filter = await Song.find({ WhoLike: { $regex: mongoDBRegex } }).sort({
    SongName: 1,
  });
  res
    .status(200)
    .json({ status: res.statusCode, result: filter, length: filter.length });
};

// @desc Create New Song
// @route POST /songs
// @access Private
const createNewSong = async (req, res) => {
  try {
    const newSong = req.body;
    if (!newSong.Singer) {
      res.status(400);
      throw new Error('Please add a new song field.');
    }
    const song = await Song.create({
      Singer: newSong.Singer,
      SongName: newSong.SongName,
      Url: newSong.Url,
      WhoLike: newSong.WhoLike,
    });

    res
      .status(201)
      .json({ status: res.statusCode, result: song, length: newSong.length });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// @desc Update song by id
// @route PUT /songs/songId/:id
// @access Private
const uptadeSongById = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    const updatedSong = await song.updateOne(req.body);

    res.status(200).json({
      status: res.statusCode,
      result: updatedSong,
      lenght: updatedSong.lenght,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// @desc Delete song by id
// @route DELETE /songs/songId/:id
// @access Private
const deleteSongById = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    await song.remove();
    res.status(200).json({ status: res.statusCode, result: req.params.id });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  getSongs,
  getSongById,
  getSongsBySingerName,
  getSongByName,
  getSongsByWhoLike,
  uptadeSongById,
  createNewSong,
  deleteSongById,
};
