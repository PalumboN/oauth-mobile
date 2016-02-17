angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $cordovaOauth) {

  var initStatus = "Not logged"

  function setStatus(name, status) {
    ctrl[name + "Status"] = status
  }

  var ctrl = {
    faceStatus: initStatus,
    twitterStatus: initStatus,
    meliStatus: initStatus,

    faceLogin: function() {
      var status = "face";
      setStatus(status, "Opening face");
      $cordovaOauth.facebook("984062531613818", ["public_profile"])
      .then(function(result) { setStatus(status, JSON.stringify(result)); })
      .catch(function(err) { setStatus(status, err); })
    },
    twitterLogin: function() {
      var status = "twitter";
      setStatus(status, "Opening twitter");
      $cordovaOauth.twitter("8f0uhDIOjwpwZev4vi0r9EF4s", "43be9eMMvNMn31On4FjltLXihH5lwcFzql5XgGvRlqaEZrJCE6")
      .then(function(result) { setStatus(status, JSON.stringify(result)); })
      .catch(function(err) { setStatus(status, err); })
    },
    meliLogin: function() {
      var status = "meli";
      setStatus(status, "Opening meli");
      $cordovaOauth.mercadolibre("6469001672768530")
      .then(function(result) { setStatus(status, JSON.stringify(result)); })
      .catch(function(err) { setStatus(status, err); })
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
