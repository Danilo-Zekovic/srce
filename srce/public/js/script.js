/*
 * script.js
 * Danilo Zekovic
 * Summer 2015
 * AngularJS Routing
 */

var srce = angular.module('srce', ['ngRoute']);

    // configure our routes
srce.config(function($routeProvider) {
  $routeProvider

  // route for the home page
  .when('/', {
    templateUrl : 'js/pages/home.html',
    controller  : 'mainCtrl'
  })

  .when('/about', {
    templateUrl : 'js/pages/about.html',
    controller  : 'aboutCtrl'
  })

  // route for the books page
  .when('/books', {
    templateUrl : 'js/pages/books.html',
    controller  : 'booksCtrl'
  })

  // route for the books page
  .when('/books/srce1', {
    templateUrl : 'js/pages/books.html',
    controller  : 'booksCtrl'
  })

  // route for the books page
  .when('/books/srce2', {
    templateUrl : 'js/pages/books.html',
    controller  : 'booksCtrl'
  })

  // route for the gallery page for photos
  .when('/gallery/photo', {
    templateUrl : 'js/pages/photo.html',
    controller  : 'galleryCtrl'
  })

  // route for the gallery page for video
  .when('/gallery/video', {
    templateUrl : 'js/pages/video.html',
    controller  : 'videoCtrl'
  })

  // route for the contact page
  .when('/contact', {
    templateUrl : 'js/pages/contact.html',
    controller  : 'contactCtrl'
  });
});

//*************************************************************************

srce.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();  
  });
})

//**************************************************************************
// >>>>>>>>>>>>>>>>>> controllers <<<<<<<<<<<<<<<<<<<

// create the controller and inject Angular's $scope
srce.controller('mainCtrl', function($scope) {
  // create a message to display in our view
  $scope.message = 'Everyone come and see how good I look!';
});

// create the controller and inject Angular's $scope
srce.controller('booksCtrl', function($scope) {
  // create a message to display in our view
  $scope.message = 'Everyone come and see how good I look!';
});

// create the controller and inject Angular's $scope
srce.controller('aboutCtrl', function($scope) {
  // create a message to display in our view
  $scope.message = 'Everyone come and see how good I look!';
});

// create the controller and inject Angular's $scope
srce.controller('galleryCtrl', function($scope) {
  // create a message to display in our view
  $scope.message = 'Everyone come and see how good I look!';
});

//==============================================================

// create the controller and inject Angular's $scope
srce.controller('videoCtrl', function($scope, $http) {
  // create a message to display in our view
  $scope.message = 'Everyone come and see how good I look!';

  $scope.videos=[];

  $http.get('js/json/video.json').success(function(data){
    $scope.videos=data;
  })
});

//============================================================

// create the controller and inject Angular's $scope
srce.controller('contactCtrl', function($scope) {
  // create a message to display in our view
  $scope.message = 'Everyone come and see how good I look!';
});

//===================================================================

