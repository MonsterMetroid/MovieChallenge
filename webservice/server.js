const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const fetch = require('node-fetch');
const helper = require("./helpers/responseFormatter");
const cors = require('cors'); //added to get around cors errors

const app = express();
app.use(cors())

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080; // set our port
const apiKey = process.env.TMDB_KEY; // API key from tmdb
// Routes

const router = express.Router();

//search endpoint calls the search movie endpoint of tmdb
router.get('/search/:query', async function(request, response) {
     let query = request.params.query;
     const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`)
     const json = await res.json();
     let movieList = await helper.formatTMDBResponse(json.results, 10);
     response.set
     response.send(movieList);
});

app.use('', router);


const server = app.listen(port, function() {
     console.log(port);
     console.log("Webserver app api listening at http://%s", port)
});