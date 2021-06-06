const path = require('path');
const express = require("express");
const mongoose = require('mongoose');
const Character = require('./models/Character');
const characterRouter = require('./routes/characters');
const episodeRouter = require('./routes/episodes')
require('dotenv').config()

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.aytd5.mongodb.net/Invincible?retryWrites=true&w=majority`
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => console.log('connected to DB'))
    .catch((err) => console.log(err))

app.get('/api', (req, res) => {
  res.json({message: "Welcome to the Invincible API!"})
})

app.use('/api/characters', characterRouter)

app.use('/api/episodes', episodeRouter)

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});