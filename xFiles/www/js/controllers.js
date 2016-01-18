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


.controller('AppCtrl', ["$state",  "$scope", "$ionicModal", "$timeout", "$stateParams", "factory", "$window", "$location", "$ionicModal", function($state, $scope, $ionicModal, $timeout, $stateParams, factory, $window, $location, $ionicModal) {



  var loadingUserNotes = localStorage.getItem("savedNotes");
  loadingUserNotes = JSON.parse(loadingUserNotes) || {};
  $scope.allNotes = loadingUserNotes;

  // $scope.refreshMe = function(recentObject) {
  //   console.log("in refreshme");
  //   $scope.allNotes = recentObject;
  // };


  // $scope.refreshMe(loadingUserNotes);
  $scope.user = {
        currentNoteTitle:"",
        currentNoteContent :""
      }

  $ionicModal.fromTemplateUrl('templates/contact-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal
  })

  $scope.openModal = function() {
    console.log("openModal Fired" );
    $scope.modal.show()
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });


  $scope.loadNoteEditor = function (chosenNote){
    console.log("chosenNote", chosenNote);
    console.log("allNotes", $scope.allNotes[chosenNote]);
    // var frozenMessage = $scope.allNotes[chosenNote].content;
    // Accepts which note the user wants to view
    $scope.noteThingToShow = chosenNote;
    console.log("new", $scope.noteThingToShow);
    // console.log("new", frozenMessage);


  }.bind(this);










  $scope.storeNewNote = function (){

    var uniqId = new Date().getTime();
    var storage = localStorage.getItem("savedNotes");
    storage = JSON.parse(storage) || {};

    if ($scope.user.currentNoteTitle.length === 0) {
      $scope.user.currentNoteTitle = "Untitled";
    }
    storage[uniqId] = {"title": $scope.user.currentNoteTitle, "content": $scope.user.currentNoteContent};
    // to Local Storage on the browser
    localStorage.setItem("savedNotes", JSON.stringify(storage));
    $scope.allNotes[uniqId] = {"title": $scope.user.currentNoteTitle, "content": $scope.user.currentNoteContent};
    // Within the factory to get menu to populate
    // $scope.refreshMe(storage);
    $scope.closeModal();

    $window.location.href = `/#/app/notes/${uniqId}`;
    $scope.loadNoteEditor(uniqId)
    // Clears fields
    $scope.user.currentNoteTitle = "";
    $scope.user.currentNoteContent = "";

  }.bind(this);

  $scope.renameNote = function() {
    console.log("hello");
  }

  $scope.saveEditedNote = function () {


    console.log("stateparams", $stateParams);

    localStorage.setItem("savedNotes", JSON.stringify($scope.allNotes));

    console.log("app.allNotes", $scope.allNotes);


  }.bind(this);

  $scope.checkSaveStatus = function(e) {

    // console.log("e", e);

  }

  $scope.deleteNote = function(e) {
    console.log("you have tried to delete a note");
  }


}]);
