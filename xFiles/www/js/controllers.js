angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $stateParams) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.notes = [
    { title: 'Note1', id: 1 },
    { title: 'Note2', id: 2 },
    { title: 'Note3', id: 3 },
    { title: 'Note4', id: 4 },
    { title: ' Note5', id: 5 },
    { title: 'Note6', id: 6 }
  ];

})

.controller('NewNoteCtrl', function($scope){

})

.controller('NotesCtrl', function($scope) {
})

.controller('PlaylistCtrl', function($scope) {
});
