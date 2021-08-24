let express = require('express');
let app = express();
let movieController = require('./controllers/movie.controller');

let cors = require('cors');

let router = express.Router();

app.use(express.static('public'));

app.use(express.json());

app.use(cors());

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

// Search movies by id and title or just title
router.get('movies/search', (req, res, next) => {
    let searchObject = {
        "id": req.query.id,
        "title": req.query.title
    };

    movieController.search(searchObject, (data) => {
        res.status(200).json({
            "status": 200,
            "statusText": "OK",
            "message": "All movies revieved.",
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

app.use('/api/', router);

app.listen(3012, () => {
    console.log('Server is running at: http://localhost:3012');
});