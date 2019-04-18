angular.module("todoListApp",[])
.controller('mainCtrl',function($scope, todosArray){
  var editing = true;
  $scope.todos = todosArray.todos;

  $scope.addItem = function(){
    var todo = {name: ""};
    $scope.todos.unshift(todo);
  };

  $scope.deleteItem = function(todo){
    $scope.todos.splice(todo, 1);
  };
})

.service('todosArray',function(){
  this.todos = [
    { name : "" }
  ]
})
;
