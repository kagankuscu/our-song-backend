const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4041;

const songs = [
  {
    "id": 1,
    "song": 'tes',
  },
  {
    "id": 2,
    "song": 'tes2',
  },
];

// app.use(
//   cors({
//     origin: '*',
//   })
// );

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });

app.get('/', (_, res) => {
  res.send('Our Songs App');
});

app.get('/songs', (_, res) => {
  res.json({ id: 1 });
});

app.get('/songs:id', (req, res) => {
  res.json(songs[+req.params.id.split(':')[1]-1]);
});

app.delete('/songs:id', (_, res) => {
  res.json({ id: 1, delete: 'deleted' });
});

app.listen(port, () => {
  console.log(`server is running on port:${port}`);
});
