MeteorEnv = function(options) {

  // Don't do anything if there's a Meteor.env already for some reason
  if (!Meteor.env) {
    Meteor.env = {};

    var path = __meteor_bootstrap__.require('path');
    var pathToConfig = process.env.HOME + '/.meteor.cfg';

    var configExists = path.existsSync(pathToConfig);
    Meteor.env.is_development = configExists;
    Meteor.env.is_production = !configExists;

  }  
};
