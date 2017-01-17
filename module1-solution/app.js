(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
   function LunchCheckController($scope) {
     $scope.items = "";
     $scope.placeHolder = "Enter comma separated values";
     $scope.message = "";
     $scope.CheckIfTooMuch = function(){
       if($scope.items.split(",").length > 3) {$scope.message = "Too much"}
     else {$scope.message = "Enjoy!"}
     };
  }
})();
