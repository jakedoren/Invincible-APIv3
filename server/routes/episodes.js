const express = require('express');
const router = express.Router();
const Episode = require('../models/Episode')

router.get('/', (req, res) => {

    const limit = parseInt(req.query.limit);

    const page = parseInt(req.query.page - 1);

    Episode.find({}, (err, foundEpisodes) => {
        if(!err) {
            res.send(foundEpisodes)
        } else {
            res.send(err)
        }
    }).limit(limit).skip(limit * page)
})

// Get random episode
router.get('/random', (req, res) => {

    Episode.count().exec((err, count) => {
        const random = Math.floor(Math.random() * count);
  
        Episode.findOne().skip(random).exec((err, randomEpisode) => {
            if(!err) {
                res.send(randomEpisode)
            } else {
                res.send(err)
            }
        })
    })
    
})

// Get one episode
router.get('/search/:number', (req, res) => {

    Episode.findOne({number: req.params.number}, (err, foundEpisode) => {
        if(!err && foundEpisode) {
            res.send(foundEpisode)
        } else if(err){
            res.status(500).send({message: "Internal server error"})
            console.log(err)
        } else {
            res.status(404).send({message: "Episode not found"})
        }
    })
})


module.exports = router;