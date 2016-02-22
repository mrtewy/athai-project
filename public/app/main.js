/**
* myApp Module
*
* Description
*/
var app = angular.module('myApp', ['ui.router','ui.bootstrap','myApp.UserService']);

/*
* ============================================================
* Configuration
* ============================================================
*/
app.config(function($stateProvider, $urlRouterProvider) {
  // Set default page
  $urlRouterProvider.when('', '/home');
  // For any unmatched url, send to 404
  $urlRouterProvider.otherwise('/404');
  // Now set up the states 
  $stateProvider
    .state('/home', {
      url: "/home",
      templateUrl: "views/home.html",
      controller: "HomeCtrl",
    })
    .state('/write', {
      url: "/write",
      templateUrl: "views/write.html",
      controller: "WriteCtrl",
      data: {
        title: 'Write'
      }
    })
    .state('/404', {
      url: "/404",
      templateUrl: "views/404.html"
  });

});




/**
* ============================================================
* Controller
* ============================================================
*/
app.controller('HomeCtrl', function ($scope, $http, UserService) {
  $scope.page = 'Home Welcome '+UserService.data.name;
});

app.controller('WriteCtrl', function ($scope) {
  $scope.page = "Write your article here";
  var wrapper = $('#write-template');
  var findImg = $(wrapper).find('img');
  var imgSrc = new Array();
  angular.forEach(findImg, function(element, index){
    imgSrc.push($(element).attr('src'));
  });
  $scope.ImgLists = imgSrc; 
});

app.controller('JoinCtrl', function ($scope, $http, $uibModal) {
  $scope.UserLoggedIn = function() {
    return true;
  }
  $scope.join = function() {
    var modalInstance = $uibModal.open({
      animation: false,
      templateUrl: 'views/modal/join.html',
      controller: 'ModalJoinCtrl',
      resolve: {}
    });
  }
});

app.controller('ModalJoinCtrl', ['$scope', function ($scope) {
  $scope.loginFacebook = function() {
    alert('Facebook Login');
  }
}]);



/*
* ============================================================
* Directive
* ============================================================
*/
// Update Title
// @usage: {{ title }}
app.directive('title', ['$rootScope', '$timeout',
  function($rootScope, $timeout) {
    return {
      link: function() {
        var listener = function(event, toState) {
          $timeout(function() {
            $rootScope.title = (toState.data && toState.data.title) 
            ? toState.data.title +' | ': 'Home | ';
          });
        };
        $rootScope.$on('$stateChangeSuccess', listener);
      }
    };
  }
]);


