var config = {};

//database uris for prod and dev environnements
config.mongoURI = {
    local: process.env.MONGO_URL || "mongodb://127.0.0.1:27017/occaz",
    prod: "",
};

module.exports = config;