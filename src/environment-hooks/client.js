MeteorEnv = function(options) {

  // Don't do anything if there's a Meteor.env already for some reason
  if (!Meteor.env) {
    Meteor.env = {};

    if (options.hosts && options.hosts.production) {

      var isProductionHost = _.contains(options.hosts.production, window.location.hostname);

      Meteor.env.is_development = !isProductionHost;
      Meteor.env.is_production = isProductionHost;
    } else {
      console.log("You have to provide a list of production hosts for this to work on the client!");
    }

  }  
};
