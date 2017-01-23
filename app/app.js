'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'metaservice',
  'myApp.index',
  'myApp.search',
  'myApp.login',
  'myApp.list',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/index'});
}])
.run([ '$rootScope', '$location', '$anchorScroll', function( $rootScope, $location, $anchorScroll) {
  $rootScope.$on("$locationChangeSuccess", function(){
    $anchorScroll();
  });
}])
;
