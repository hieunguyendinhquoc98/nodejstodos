var Todos = require("../api/models/todoModels");

module.exports = function(app){
    app.get("/api/setupTodos", function (req, res){

        //set up seed data
        var seedTodos = [
            {
                text:"Học node.js",
                isDone:false
            },
            {
                text:"Học angular.js",
                isDone: false
            },
            {
                text: "Viết một ứng dụng hoàn chỉnh",
                isDone: false
            },
            {
                text: "Lấy data từ server sử dụng API",
                isDone: false
            }
        ];
        Todos.create(seedTodos, function(err,results){
            res.send(results);
        });

    })
}