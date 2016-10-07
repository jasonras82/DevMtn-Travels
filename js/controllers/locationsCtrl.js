angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv) {

// $scope.test = "testing testing";
  $scope.locations =  mainSrv.travelInfo;

});
