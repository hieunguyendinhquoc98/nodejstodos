var configValues = require("./config.json");

module.exports = {
    getConnectionString: function () {
        return `mongodb+srv://${configValues.username}:${configValues.password}@clustertest-bferg.mongodb.net/test?retryWrites=true&w=majority`
    }
}