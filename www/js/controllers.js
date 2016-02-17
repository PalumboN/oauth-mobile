angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $cordovaOauth, $cordovaOauthUtility) {

  console.log($cordovaOauth.facebook);

  function setStatus(status) {
    ctrl.status = status
  }

  var ctrl = {
    status: "Waiting...",
    faceLogin: function() {
      setStatus("Opening face");
      $cordovaOauth.facebook("984062531613818", ["public_profile"])
      .then(function(result) { setStatus(JSON.stringify(result)); })
      .catch(function(err) { setStatus(err); })
    }
  }

  return ctrl;

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
