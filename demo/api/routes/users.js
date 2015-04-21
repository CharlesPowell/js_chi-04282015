var express = require('express');
var router = express.Router();
var Store = require('../lib/Store');
var db = new Store('./data/users.json', {pretty:true});

/* GET users listing. */
router.get('/', function(req, res) {
    db.all(function(err, users) {
        res.status(200).json(users);
    });
});

function get(id, res) {
    db.get(id, function(err, user) {
        if(err) {
            res.status(500).send(err.message);
        }
        else {
            res.set('Content-Type', 'application/json');
            res.status(200).json(user);
        }
    });
}

router.get('/:id', function(req, res) {
    get(req.params.id, res);
});

router.post('/', function(req, res) {
    req.body.id = db.allSync().length;
    db.save(req.body.id, req.body, function(err, id) {
        if(err) {
            res.status(500).send(err);
        }
        else {
            get(id, res);
        }
    });
});

router.put('/:id', function(req, res) {
    db.save(req.params.id, req.body, function(err, id) {
        if(err) {
            res.status(500).send(err);
        }
        else {
            get(id, res);
        }
    });
});

router.delete('/:id', function(req, res) {
    db.delete(req.params.id, function(err, all) {
        if(err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).send(all);
        }
    });
});

module.exports = router;
