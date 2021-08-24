let express = require('express');
let app = express();
let movieController = require('./controllers/movie.controller');

let cors = require('cors');

let router = express.Router();

app.use(express.static('public'));

app.use(express.json());

app.use(cors());



app.use('/api/', router);

app.listen(3012, () => {
    console.log('Server is running at: http://localhost:3012');
});