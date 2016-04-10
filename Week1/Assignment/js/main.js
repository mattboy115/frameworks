var app = angular.module('myApp', []);

app.controller('GroceryController', function($scope){

    $scope.groceries = ['Nails', 'Pipe', 'Wood'];

    $scope.addItem = function() {
        $scope.groceries.push($scope.newItem);
        $scope.newItem = '';
    }

    $scope.removeItem = function(item) {
        var idx = $scope.groceries.indexOf(item);
            $scope.groceries.splice($scope.groceries.indexOf(item),1);
    }
});
