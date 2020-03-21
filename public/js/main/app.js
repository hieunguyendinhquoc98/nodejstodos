var app = angular.module("app.todos",["xeditable"]);

app.controller("todoController",['$scope','svTodos',function ($scope, svTodos){
    
    $scope.appName = "Node todos Dashboard !!!";
    $scope.formData = {};
    $scope.todos = [];
    $scope.loading = true;
    //load data from api
    svTodos.get().then(function (res) {
        $scope.todos = res.data;
        console.log($scope.todos);
        $scope.loading = false;
    }, function(err){
        console.log(err);
    });
    $scope.createTodo = function () {
        // console.log($scope.formData);
        var todo = {
            text: $scope.formData.text,
            isDone: false
        }
        svTodos.create(todo).then(function (res){
            $scope.todos = res.data;
            $scope.formData.text = "";
            $scope.loading = false;
        });
    }
    $scope.updateTodo = function (todo) {
        $scope.loading = true;
        svTodos.update(todo).then(function(res){
            $scope.todos = res.data;
            $scope.loading = false;
        })
    }
    $scope.deleteTodo = function (todo) {
        $scope.loading = true;
        svTodos.delete(todo._id).then(function (res){
            $scope.todos = res.data;
            $scope.loading = false;
        })
    }
}]);