// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "menu.html",
      controller: 'AppCtrl'
    })

.state('app.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "home.html"
        }
      }
    })


    .state('app.connect', {
      url: "/connect",
      views: {
        'menuContent' :{
          templateUrl: "connect.html"
        }
      }
    })

    .state('app.register', {
      url: "/register",
      views: {
        'menuContent' :{
          templateUrl: "register.html"
        }
      }
    })
.state('app.fevents', {
      url: "/fevents",
      views: {
        'menuContent' :{
          templateUrl: "fevents.html"
        }
      }
    })
.state('app.gcalendar', {
      url: "/gcalendar",
      views: {
        'menuContent' :{
          templateUrl: "gcalendar.html"
        }
      }
    })

.state('app.match', {
      url: "/match",
      views: {
        'menuContent' :{
          templateUrl: "match.html"
        }
      }
    })

.state('app.login', {
      url: "/login",
      views: {
        'menuContent' :{
          templateUrl: "login.html"
        }
      }
    })


.state('app.setmeappcal', {
      url: "/setmeappcal",
      views: {
        'menuContent' :{
          templateUrl: "setmeappcal.html"
        }
      }
    })


    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent' :{
          templateUrl: "playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })
;




  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
