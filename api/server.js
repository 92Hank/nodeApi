let express = require('express');
let app = express();
let movieRouter = require('./router/movie.router');
let errorHelper = require('./helpers/errorHelper');

app.use(express.json());

app.use('/api/', movieRouter);
// exception logger to console
app.use(errorHelper.logErrorsToConsole);
// catch-all exception middleware
app.use(errorHelper.errorHandler);

app.listen(3012, () => {
    console.log('Server is running at: http://localhost:3012');
});