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

    Handlebars.registerHelper('isDevelopment', function(options) {
      // console.log(Meteor.env.is_development, fn, inverse);
      return Meteor.env.is_development ? options.fn() : options.inverse();
    })

    Handlebars.registerHelper('isProduction', function(options) {
      return Meteor.env.is_production ? options.fn() : options.inverse();
    })

  }
};
