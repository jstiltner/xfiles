angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $timeout) {

  this.allNotes = localStorage.getItem("savedNotes");

  this.allNotes = JSON.parse(this.allNotes) || {};

  console.log("WHAT IS THIS", this.allNotes);

  this.currentNoteTitle = "";
  this.currentNoteContent = "";

  $scope.storeNewNote = function (){

    var storage = localStorage.getItem("savedNotes");

    storage = JSON.parse(storage) || {};

    storage[this.currentNoteTitle] = this.currentNoteContent;

    localStorage.setItem("savedNotes", JSON.stringify(storage));

    console.log("Before manipulation", storage);

    console.log(this.currentNoteContent);
    console.log(this.currentNoteTitle);

  }.bind(this);

  $scope.saveEditedNote = function (){

    localStorage.setItem("savedNotes", JSON.stringify(this.allNotes));

    console.log("app.allNotes", this.allNotes);


  }.bind(this);


});

// .controller('PlaylistsCtrl', function($scope) {
//   $scope.playlists = [
//     { title: 'Reggae', id: 1 },
//     { title: 'Chill', id: 2 },
//     { title: 'Dubstep', id: 3 },
//     { title: 'Indie', id: 4 },
//     { title: 'Rap', id: 5 },
//     { title: 'Cowbell', id: 6 }
//   ];
// })

// .controller('PlaylistCtrl', function($scope, $stateParams) {
// });
