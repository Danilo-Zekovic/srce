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

  // route for the contact page
  .when('/contact', {
    templateUrl : 'js/pages/contact.html',
    controller  : 'contactCtrl'
  });
});

srce.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();  
  });
})

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
srce.controller('contactCtrl', function($scope) {
  // create a message to display in our view
  $scope.message = 'Everyone come and see how good I look!';
});