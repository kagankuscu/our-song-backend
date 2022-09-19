const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const cors = require('cors');
const { main, pageNotFound } = require('./controllers/appController');
const connectDB = require('./config/db');
const app = express();
const port = process.env.PORT || 4041;

connectDB();

app.use(
  cors({
    origin: '*',
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/songs', require('./routes/songRoutes'));

app.get('/', main);
app.get('*', pageNotFound);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is running on port:${port}`);
});
