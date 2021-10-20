Package.describe({
  name: 'tombaio:tomba-meteor',
  version: "1.0.0",
  summary: "Meteor Node Tomba library",
  git: "https://github.com/tomba-io/meteor",
  documentation: "README.md",
});

Npm.depends({
  tomba: "1.0.0",
});

Package.onUse(function(api) {
  api.versionsFrom('2.4');
  api.use('ecmascript');
  api.mainModule('tomba-meteor.js');
  api.export('Tomba');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('tombaio:tomba-meteor');
  api.mainModule('tomba-meteor-tests.js');
});
