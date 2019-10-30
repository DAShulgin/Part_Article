const express = require('express');
const router = express.Router();
const Article = require('./article');

router.get('/article', (req, res) => {
    Article.find({}).then(article => {
        res.send(article); 
    });
});

router.post('/article', (req, res) => {
    Article.create(req.body).then(article => {
        res.send(article);
    });
});

router.put('/article/:id', (req, res) => {
    Article.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        Article.findOne({_id: req.params.id}).then(article => {
            res.send(article);
        });
    });
});


router.delete('/article/:id', (req, res) => {
    Article.deleteOne({_id: req.params.id}).then(article => {
        res.send(article);
    })
});


module.exports = router;