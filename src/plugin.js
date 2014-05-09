angular.module( 'core9Dashboard.rules', [
  'templates-module-platform-rules',
  'core9Dashboard.rules.app'
])

;

angular.module('core9Dashboard.admin.dashboard').requires.push('core9Dashboard.rules');