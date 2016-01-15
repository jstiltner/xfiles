angular.module('starter.controllers', [])



.factory('factory', function() {
  var storage = '';

  return {

    setStorage: function(value) {
      storage = value;
      return storage;

    },
    getStorage: function() {
      return storage;
    }
  }
  })


.controller('AppCtrl', ["$state",  "$scope", "$ionicModal", "$timeout", "$stateParams", "factory", "$window", "$location", function($state, $scope, $ionicModal, $timeout, $stateParams, factory, $window, $location) {


  var loadingUserNotes = localStorage.getItem("savedNotes");
  loadingUserNotes = JSON.parse(loadingUserNotes) || {};
  $scope.allNotes = loadingUserNotes;

  // $scope.refreshMe = function(recentObject) {
  //   console.log("in refreshme");
  //   $scope.allNotes = recentObject;
  // };

  // $scope.refreshMe(loadingUserNotes);
  $scope.currentNoteTitle = "";
  $scope.currentNoteContent = "";

  $scope.loadNoteEditor = function (chosenNote){
    console.log("chosenNote", chosenNote);
    console.log("allNotes", $scope.allNotes);
    // Accepts which note the user wants to view
    $scope.noteThingToShow = chosenNote;

    console.log("message", $scope.allNotes[$scope.noteThingToShow]);

    $scope.messageToEdit = $scope.allNotes[chosenNote];


  }.bind(this);

  $scope.storeNewNote = function (){

    var uniqId = new Date().getTime();
    var storage = localStorage.getItem("savedNotes");
    storage = JSON.parse(storage) || {};
    storage[uniqId] = {"title": $scope.currentNoteTitle, "content": $scope.currentNoteContent};
    // to Local Storage on the browser
    localStorage.setItem("savedNotes", JSON.stringify(storage));
    // Within the factory to get menu to populate
    // $scope.refreshMe(storage);


    // Clears fields
    $scope.currentNoteTitle = "";
    $scope.currentNoteContent = "";

  }.bind(this);

  $scope.saveEditedNote = function () {


    console.log("stateparams", $stateParams);

    localStorage.setItem("savedNotes", JSON.stringify($scope.allNotes));

    console.log("app.allNotes", $scope.allNotes);


  }.bind(this);


}]);
