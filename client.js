MeteorEnv = function(options) {

  // Don't do anything if there's a Meteor.env already for some reason
  if (!Meteor.env) {
    Meteor.env = {};

    if (options.hosts) {

      var isProductionHost = _.contains(options.hosts, window.location.hostname);

      Meteor.env.is_development = !isProductionHost;
      Meteor.env.is_production = isProductionHost;
    } else {
      console.log("You have to provide a list of production hosts for this to work on the client!");
    }

    Handlebars.registerHelper('ifDevelopment', function(options) {
      // console.log(Meteor.env.is_development, fn, inverse);
      return Meteor.env.is_development ? options.fn() : options.inverse();
    })

    Handlebars.registerHelper('ifProduction', function(options) {
      return Meteor.env.is_production ? options.fn() : options.inverse();
    })

  }
};
