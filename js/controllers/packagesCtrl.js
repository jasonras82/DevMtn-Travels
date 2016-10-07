angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainSrv) {

// $scope.test = "testing";

  $scope.locations = mainSrv.travelInfo;

});
