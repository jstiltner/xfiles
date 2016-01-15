angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $stateParams) {
  $scope.allNotes = localStorage.getItem("savedNotes");

  $scope.allNotes = JSON.parse($scope.allNotes) || {};

  console.log("WHAT IS $scope", $scope.allNotes);

  $scope.currentNoteTitle = "";
  $scope.currentNoteContent = "";

  $scope.loadNoteEditor = function (chosenNote){

    $scope.noteThingToShow = chosenNote;

    $scope.messageToEdit = $scope.allNotes[chosenNote];

    console.log("Message of the thing", $scope.messageToEdit);
  }.bind(this);

  $scope.storeNewNote = function (){

    var storage = localStorage.getItem("savedNotes");

    storage = JSON.parse(storage) || {};

    storage[$scope.currentNoteTitle] = $scope.currentNoteContent;

    localStorage.setItem("savedNotes", JSON.stringify(storage));

    console.log("Before manipulation", storage);

    console.log($scope.currentNoteContent);
    console.log($scope.currentNoteTitle);

  }.bind($scope);

  $scope.saveEditedNote = function (){

    localStorage.setItem("savedNotes", JSON.stringify($scope.allNotes));

    console.log("app.allNotes", $scope.allNotes);


  }.bind(this);

  $scope.notes = [
    { title: 'Note1', id: 1 },
    { title: 'Note2', id: 2 },
    { title: 'Note3', id: 3 },
    { title: 'Note4', id: 4 },
    { title: 'Note5', id: 5 },
    { title: 'Note6', id: 6 }
  ];


});
