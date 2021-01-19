async function formatTMDBResponse(object, limit) {
    let ResponseArray = [];
    
    limit = (limit >= object.length) ? object.length : limit;

    // console.log(limit + "<:>" + object.length);

    for(let i=0; i<limit; i++){
        let movieInfo = await objectTransformer(object[i]);
        // console.log("object " + i + " : " + JSON.stringify(object[i]));
        ResponseArray.push(movieInfo);
        // console.log(ResponseArray);
    }

    return ResponseArray;
};

async function objectTransformer(object) {
    let imageURL = await urlBuilder(object.poster_path);
    let result = {
        "movie_id" : object.id,
        "title" : object.title,
        "poster" : imageURL,
        "popularity" : `${object.popularity} out of ${object.vote_count} votes`
    };

    return result;
};

function urlBuilder(path) {
    path = (path || "/zUqyn3aQXTzeP1n8yd8Udt1twYA.jpg"); //null check for if poster image isnt found
    result = process.env.BASE_URL + process.env.FILE_SIZE + path;
    return result;
};

module.exports = {
    formatTMDBResponse
};