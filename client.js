MeteorEnv = function(options) {

  // Don't do anything if there's a Meteor.env already for some reason
  if (!Meteor.env) {
    Meteor.env = {};

    if (options.hosts) {

      var isProductionHost = _.contains(options.hosts, window.location.hostname);

      Meteor.env.isDevelopment = !isProductionHost;
      Meteor.env.isProduction = isProductionHost;
    } else {
      console.log("You have to provide a list of production hosts for this to work on the client!");
    }

    Handlebars.registerHelper('ifDevelopment', function(options) {
      // console.log(Meteor.env.isDevelopment, fn, inverse);
      return Meteor.env.isDevelopment ? options.fn() : options.inverse();
    })

    Handlebars.registerHelper('ifProduction', function(options) {
      return Meteor.env.isProduction ? options.fn() : options.inverse();
    })

  }
};
