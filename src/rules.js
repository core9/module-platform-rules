angular.module('core9Dashboard.rules.app', [
  'ui.router',
  'core9Dashboard.config',
  'core9Dashboard.menu'
  ])

.config(function($stateProvider) {
  $stateProvider
  .state('rules',  {
    url: '/config/rules',
    views: {
      "main": {
        controller: 'RulesCtrl',
        templateUrl: 'rules-rules/rules.tpl.html'
      }
    },
    data:{ 
      pageTitle: 'Rules',
      sidebar: 'config'
    }
  });
})

.controller("RulesCtrl", function ($scope) {
  $scope.test = "Test";
})

.run(function(MenuService) {
  MenuService.add('config', {title: "Rules", weight: 150, link: "rules"});
})
;
