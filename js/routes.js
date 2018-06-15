angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.accueil', {
    url: '/accueil',
    views: {
      'side-menu21': {
        templateUrl: 'templates/accueil.html',
        controller: 'accueilCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.sInscrire', {
    url: '/s'inscrire',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sInscrire.html',
        controller: 'sInscrireCtrl'
      }
    }
  })

  .state('menu.seConnecter', {
    url: '/seconnecter',
    views: {
      'side-menu21': {
        templateUrl: 'templates/seConnecter.html',
        controller: 'seConnecterCtrl'
      }
    }
  })

  .state('menu.aProposDeNous', {
    url: '/apropos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aProposDeNous.html',
        controller: 'aProposDeNousCtrl'
      }
    }
  })

  .state('menu.contact', {
    url: '/contact',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contact.html',
        controller: 'contactCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/accueil')


});