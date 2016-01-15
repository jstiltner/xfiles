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

  $scope.refreshMe = function(recentObject) {
    console.log("in refreshme");
    $scope.allNotes = recentObject;
  };

  $scope.refreshMe(loadingUserNotes);
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
    // var usableLocation = $location.$$path.toString();
    // var usableLocation = $location.$$path.split("");
    // usableLocation = usableLocation.splice(11);
    // usableLocation = usableLocation.join("");

    // $scope.thisNoteRightNow = usableLocation;

    $scope.noteThingToShow = chosenNote;
    $scope.messageToEdit = $scope.allNotes[chosenNote];


  }.bind(this);

  $scope.storeNewNote = function (){

    var uniqId = new Date().getTime();
    var storage = localStorage.getItem("savedNotes");
    storage = JSON.parse(storage) || {};
    storage[uniqId] = {"title": $scope.user.currentNoteTitle, "content": $scope.user.currentNoteContent};
    // to Local Storage on the browser
    localStorage.setItem("savedNotes", JSON.stringify(storage));
    $scope.allNotes[uniqId] = {"title": $scope.user.currentNoteTitle, "content": $scope.user.currentNoteContent};
    // Within the factory to get menu to populate
    // $scope.refreshMe(storage);
    $scope.closeModal();


    // Clears fields
    $scope.user.currentNoteTitle = "";
    $scope.user.currentNoteContent = "";

  }.bind(this);

  $scope.saveEditedNote = function () {


    console.log("stateparams", $stateParams);

    localStorage.setItem("savedNotes", JSON.stringify($scope.allNotes));

    console.log("app.allNotes", $scope.allNotes);


  }.bind(this);


}]);
