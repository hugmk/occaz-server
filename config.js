var config = {};

//database uris for prod and dev environnements
config.mongoURI = {
    local: "mongodb://127.0.0.1:27017/occaz",
    prod: "",
};

module.exports = config;