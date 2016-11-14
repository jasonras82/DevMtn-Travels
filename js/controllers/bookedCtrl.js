angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $state) {

console.log($state);
// console.log($state.params);

  // $scope.locations = mainSrv.travelInfo;

  $scope.getLocation = function() {
    var dataArray = mainSrv.travelInfo;
    for(var i = 0; i < dataArray.length; i++) {
      if(parseInt($state.params.id) === dataArray[i].id) {
        return dataArray[i];
      }
    }
  };
});

// Can't get the ID to populate as a piece of the path.
// Don't understand how to implement the ng-style directive
