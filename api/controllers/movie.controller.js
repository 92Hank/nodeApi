let fs = require('fs');

const FILE_NAME = './data/movies.json';

let movieController = {
    get: (resolve, reject) => {
        fs.readFile(FILE_NAME, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(data));
            }
        });
    },
    getById: (id, resolve, reject) => {
        fs.readFile(FILE_NAME, (err, data) => {
            if (err) {
                reject(err);
            } else {
                let movie = JSON.parse(data).find(m => m.id == id);
                resolve(movie);
            }
        })
    },
    search: (searchObject, resolve, reject) => {
        fs.readFile(FILE_NAME, (err, data) => {
            if (err) {
                reject(err);
            } else {
                let movies = JSON.parse(data);

                if (searchObject) {
                    // Example search
                    // let searchObject = {
                    //  "id": 1,
                    //  "title": 'A'
                    // };
                    movies = movies.filter(
                        m => (searchObject.id ? m.id == searchObject.id : true) &&
                            (searchObject.title ? m.title.toLowerCase().indexOf(searchObject.title.toLowerCase()) >= 0 : true));
                }

                resolve(movies);
            }
        });
    },
    insert: (newData, resolve, reject) => {
        fs.readFile(FILE_NAME, (err, data) => {
            if (err) {
                reject(err);
            } else {
                let movies = JSON.parse(data);
                movies.push(newData);
                fs.writeFile(FILE_NAME, JSON.stringify(movies), (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(newData);
                    }
                });
            }
        });
    },
    update: (newData, id, resolve, reject) => {
        fs.readFile(FILE_NAME, (err, data) => {
            if (err) {
                reject(err);
            } else {
                let movies = JSON.parse(data);
                let movie = movies.find(m => m.id == id);
                if (movie) {
                    Object.assign(movie, newData);
                    fs.writeFile(FILE_NAME, JSON.stringify(movies), (err) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(newData);
                        }
                    });
                }
            }
        });
    },
    delete: (id, resolve, reject) => {
        fs.readFile(FILE_NAME, (err, data) => {
            if (err) {
                reject(err);
            } else {
                let movies = JSON.parse(data);
                let index = movies.findIndex(m => m.id == id);
                if (index != -1) {
                    movies.splice(index, 1);
                    fs.writeFile(FILE_NAME, JSON.stringify(movies), (err) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(index);
                        }
                    });
                }
            }
        });
    }
};

module.exports = movieController;