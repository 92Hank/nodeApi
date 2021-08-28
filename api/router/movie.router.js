const express = require('express');
let movieController = require('../controllers/movie.controller');

const router = express.Router();

// Get all the movies
router.get('/movies', (req, res, next) => {
    movieController.get((data) => {
        res.status(200).json({
            "status": 200,
            "statusText": "OK",
            "message": "All movies retrieved.",
            "data": data
        });
    }, (err) => {
        next(err);
    });
});

// Get one movie
router.get('/movies/:id', (req, res, next) => {
    movieController.getById(req.params.id, (data) => {
        if (data) {
            res.status(200).json({
                "status": 200,
                "statusText": "OK",
                "message": "Single movie retrieved.",
                "data": data
            });
        } else {
            res.status(404).json({
                "status": 404,
                "statusText": "Not Found",
                "message": "The movie '" + req.params.id + "' could not be found.",
                "error": {
                    "code": "NOT_FOUND",
                    "message": "The movie '" + req.params.id + "' could not be found."
                }
            });
        }
    }, (err) => {
        next(err);
    });
});

// Add movie
router.post('/movies', (req, res, next) => {
    movieController.insert(req.body, (data) => {
        res.status(201).json({
            "status": 201,
            "statusText": "Created",
            "message": "New Movie Added.",
            "data": data
        });
    }, (err) => {
        next(err);
    });
})

// Update movie
router.put('/movies/:id', (req, res, next) => {
    movieController.getById(req.params.id, (data) => {
        if (data) {
            movieController.update(req.body, req.params.id, (data) => {
                res.status(200).json({
                    "status": 200,
                    "statusText": "OK",
                    "message": "Movie '" + req.params.id + "' updated.",
                    "data": data
                });
            });
        } else {
            res.status(404).json({
                "status": 404,
                "statusText": "Not Found",
                "message": "The movie '" + req.params.id + "' could not be found.",
                "error": {
                    "code": "NOT_FOUND",
                    "message": "The movie '" + req.params.id + "' could not be found."
                }
            });
        }
    }, (err) => {
        next(err);
    });
})

// Delete one movie
router.delete('/movies/:id', (req, res, next) => {
    movieController.getById(req.params.id, (data) => {
        if (data) {
            movieController.delete(req.params.id, (data) => {
                res.status(200).json({
                    "status": 200,
                    "statusText": "OK",
                    "message": "The movie '" + req.params.id + "' is deleted.",
                    "data": "Movie '" + req.params.id + "' deleted."
                });
            });
        } else {
            res.status(404).json({
                "status": 404,
                "statusText": "Not Found",
                "message": "The movie '" + req.params.id + "' could not be found.",
                "error": {
                    "code": "NOT_FOUND",
                    "message": "The movie '" + req.params.id + "' could not be found."
                }
            });
        }
    }, (err) => {
        next(err);
    });
})

// Update specific properties or the entire movie-object
router.patch('/movies/:id', (req, res, next) => {
    movieController.getById(req.params.id, (data) => {
        if (data) {
            movieController.update(req.body, req.params.id, (data) => {
                res.status(200).json({
                    "status": 200,
                    "statusText": "OK",
                    "message": "Movie '" + req.params.id + "' patched.",
                    "data": data
                });
            });
        } else {
            res.status(404).json({
                "status": 404,
                "statusText": "Not Found",
                "message": "The movie '" + req.params.id + "' could not be found.",
                "error": {
                    "code": "NOT_FOUND",
                    "message": "The movie '" + req.params.id + "' could not be found."
                }
            });
        }
    }, (err) => {
        next(err);
    });
})

module.exports = router;
