const express = require('express');
const router = express.Router();
const Character = require('../models/Character')

// Get all Characters
router.get('/', (req, res) => {

    let query = {};

    const limit = parseInt(req.query.limit);

    const page = parseInt(req.query.page - 1);

    if (req.query.firstname) {
        query.firstname = req.query.firstname;
    }

    if (req.query.lastname) {
        query.lastname = req.query.lastname;
    }

    if (req.query.alias) {
        query.alias = req.query.alias;
    }

    if (req.query.actor) {
        query.actor = req.query.actor
    }

    if(Object.keys(req.query).length && !req.query.firstname && !req.query.lastname && !req.query.alias && !req.query.actor && !req.query.limit) {
        return res.status(400).send({message: "Bad request"})
    }

       Character.find(query, (err, foundCharacter) => {
        if(!err && foundCharacter) {
            res.send(foundCharacter)
        } else if(err) {
            console.log(err)
            res.status(500).send({message: "Internal server error"})
        } else {
            res.send({message: "Character not found"})
        }
    }).limit(limit).skip(limit * page)
    
})

// Get a random Character
router.get('/random', (req, res) => {
    Character.count().exec((err, count) => {
        const random = Math.floor(Math.random() * count);
  
        Character.findOne().skip(random).exec((err, randomCharacter) => {
            if(!err) {
                res.send(randomCharacter)
            } else {
                res.send(err)
            }
        })
    })
})

// Search Characters by firstname, lastname or actor
router.get('/search/:query', (req, res) => {
    const regexSearch = { $regex: req.params.query, $options: 'i' };

    Character.find({$or: [{firstname: regexSearch}, {alias: regexSearch}, {lastname: regexSearch}, {actor: regexSearch}]}, (err, foundCharacter) => {
        if(!err && foundCharacter) {
            res.send(foundCharacter)
        } else if(err) {
            res.status(500).send({ message: "Internal server error" })
            console.log(err)
        } else {
            res.status(404).send({message: "Character not found"})
        }
    })
})

// Get Character by id
router.get(('/:id'), (req, res) => {
    Character.findById(req.params.id, (err, foundId) => {
        if(!err && foundId) {
            res.send(foundId)
        } else if(err) {
            res.status(500).send({ message: "Internal server error" })
            console.log(err)
        } else {
            res.status(404).send({message: "Character not found"})
        }
    })
})

module.exports = router;